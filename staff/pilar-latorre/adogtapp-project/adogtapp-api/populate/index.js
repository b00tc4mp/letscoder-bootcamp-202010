const bcrypt = require('bcryptjs')
const { models: { User, Pet }, mongoose } = require('adogtapp-data')
const data = require('./data')
const fs = require('fs')
const path = require('path')
const rimraf = require('rimraf')
const fsp = fs.promises
require('dotenv').config()


const { env: { MONGODB_URL } } = process

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => Promise.all([
        User.deleteMany(),
        Pet.deleteMany()
    ]))
    .then(() => {
        rimraf.sync(path.join(__dirname, `../data/pets`))
    })
    .then(() => Promise.all([
        fsp.mkdir(path.join(__dirname, `../data/pets`))
    ]))
    .then(() => Promise.all(
        data.map(({ userName, email, password, address, city, phone, description, pets }) =>
            bcrypt.hash(password,10)
                .then(hash=>
                    User.create({ userName, email, password: hash, address, city, phone, description })
                        .then(({ _id }) =>
                                    Promise.all(pets.map(({ name, breed, species, color, description, image }) =>
                                    Pet.create({ name, breed, species, color, description, shelter: _id })
                                        .then(({ _id }) =>
                                            new Promise((resolve, reject) => {
                                                const rs = fs.createReadStream(path.join(__dirname, `./pets/${image}.jpg`))
                                                const ws = fs.createWriteStream(path.join(__dirname, `../data/pets/${_id}.jpg`))

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