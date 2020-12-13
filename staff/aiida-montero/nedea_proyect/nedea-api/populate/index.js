require('dotenv').config()

const mongoose = require('mongoose')
const { Pictogram } = require('../models')
const data = require('./data')
const fs = require('fs')
const path = require('path')
const rimraf = require('rimraf')
const {Types: {ObjectId} } = mongoose

const fsp = fs.promises

const { env: { MONGODB_URL } } = process

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => Promise.all([
        Pictogram.deleteMany(),

    ]))
    .then(() => {
        rimraf.sync(path.join(__dirname, `../data/pictograms`))
    })
    .then(() => Promise.all([
        fsp.mkdir(path.join(__dirname, `../data/pictograms`))
    ]))
    .then(() => Promise.all(
        data.map(({ title, description, image}) =>{
            const owner = ObjectId()

            return Pictogram.create({ title, description, owner  })
                .then(({ _id }) =>
                    new Promise((resolve, reject) => { 
                        const rs = fs.createReadStream(path.join(__dirname, `./pictograms/${image}.jpg`))
                        const ws = fs.createWriteStream(path.join(__dirname, `../data/pictograms/${_id}.jpg`))

                        ws.on('error', reject)

                       rs.on('end', resolve )

                        rs.pipe(ws)
                    }))
                })
    ))
    .catch(console.error)
    .then(() => mongoose.disconnect())
    .then(() => console.log('ended'))