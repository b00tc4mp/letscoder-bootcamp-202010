require('dotenv').config()

const mongoose = require('mongoose')
const { User, Car } = require('../models')
const data = require('./data')
const fs = require('fs')
const path = require('path')
const rimraf = require('rimraf')
const fsp = fs.promises

const { env: { MONGODB_URL } } = process

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => Promise.all([
        User.deleteMany(),
        Car.deleteMany()
    ]))
    .then(() => {
        rimraf.sync(path.join(__dirname, `../data/users`))
        rimraf.sync(path.join(__dirname, `../data/cars`))
    })
    .then(() => Promise.all([
        fsp.mkdir(path.join(__dirname, `../data/users`)),
        fsp.mkdir(path.join(__dirname, `../data/cars`))
    ]))
    .then(() => Promise.all(
        data.map(({ name, image, email, password, cars }) =>
            User.create({ name, email, password })
                .then(({ _id }) =>
                    new Promise((resolve, reject) => {
                        const rs = fs.createReadStream(path.join(__dirname, `./users/${image}.jpg`))
                        const ws = fs.createWriteStream(path.join(__dirname, `../data/users/${_id}.jpg`))

                        ws.on('error', reject)

                        rs.on('end', () =>
                            Promise.all(cars.map(({ name, image }) =>
                                Car.create({ name, owner: _id })
                                    .then(({ _id }) =>
                                        new Promise((resolve, reject) => {
                                            const rs = fs.createReadStream(path.join(__dirname, `./cars/${image}.jpg`))
                                            const ws = fs.createWriteStream(path.join(__dirname, `../data/cars/${_id}.jpg`))

                                            ws.on('error', reject)

                                            rs.on('end', resolve)

                                            rs.pipe(ws)
                                        }))
                            ))
                                .then(resolve)
                        )

                        rs.pipe(ws)
                    }))
        )
    ))
    .catch(console.error)
    .then(() => mongoose.disconnect())
    .then(() => console.log('ended'))