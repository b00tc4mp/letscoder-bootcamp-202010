require('dotenv').config()

const { models: { Food }, mongoose } = require('martachisfit-data')
const data = require('../uploads')
const fs = require('fs')
const path = require('path')
const rimraf = require('rimraf')
const { Types: { ObjectId } } = mongoose

const fsp = fs.promises

const { env: { MONGODB_URL } } = process

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => Promise.all([
        Food.deleteMany(),

    ]))
    .then(() => {
        rimraf.sync(path.join(__dirname, `../data/foods`))
    })
    .then(() => Promise.all([
        fsp.mkdir(path.join(__dirname, `../data/foods`))
    ]))
    .then(() => Promise.all(
        data.map(({ }) => {
            const owner = ObjectId()

            return Food.create({})
                .then(({ _id }) =>
                    new Promise((resolve, reject) => {
                        const rs = fs.createReadStream(path.join(__dirname, `./foods/${image}.jpg`))
                        const ws = fs.createWriteStream(path.join(__dirname, `../data/foods/${_id}.jpg`))

                        ws.on('error', reject)

                        rs.on('end', resolve)

                        rs.pipe(ws)
                    }))
        })
    ))
    .catch(console.error)
    .then(() => mongoose.disconnect())
    .then(() => console.log('ended'))