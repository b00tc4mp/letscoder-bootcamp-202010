require('dotenv').config()

const mongoose = require('mongoose')
const { User, Product } = require('../models')
const data = require('./data')
const fs = require('fs')
const path = require('path')
const rimraf = require('rimraf')
const fsp = fs.promises
const bcrypt = require('bcryptjs')

const { env: { MONGODB_URL } } = process

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => Promise.all([
        User.deleteMany(),
        Product.deleteMany()
    ]))
    .then(() => {
        rimraf.sync(path.join(__dirname, `../data/products`))
    })
    .then(() => Promise.all([
        fsp.mkdir(path.join(__dirname, `../data/products`))
    ]))
    .then(() => Promise.all(
        data.map(({ name, email, password, contact, city, products }) =>
            bcrypt.hash(password, 10)
                .then(hash =>
                    User.create({ name, email, password: hash, contact, city })
                        .then(({ _id }) =>
                            Promise.all(products.map(({ name, image, description, price }) =>
                                Product.create({ name, owner: _id, image, description, price })
                                    .then(({ _id }) =>
                                        new Promise((resolve, reject) => {
                                            const rs = fs.createReadStream(path.join(__dirname, `./products/${image}.jpg`))
                                            const ws = fs.createWriteStream(path.join(__dirname, `../data/products/${_id}.jpg`))

                                            ws.on('error', reject)

                                            rs.on('end', resolve)

                                            rs.pipe(ws)
                                        }))
                            ))
                        )

                )


        )
    ))
    .catch(console.error)
    .then(() => mongoose.disconnect())
    .then(() => console.log('ended'))