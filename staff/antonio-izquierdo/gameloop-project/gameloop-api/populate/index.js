require('dotenv').config()
const data = require('./data')
const fs = require('fs')
const path = require('path')
const rimraf = require('rimraf')
const fsp = fs.promises
const bcrypt = require('bcryptjs')
const { models: { User, Game }, mongoose } = require('gameloop-data')

const { env: { MONGODB_URL } } = process

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => Promise.all([
        User.deleteMany(),
        Game.deleteMany()
    ]))
    .then(() => {
        rimraf.sync(path.join(__dirname, `../data/users`))
        rimraf.sync(path.join(__dirname, `../data/games`))
    })
    .then(() => Promise.all([
        fsp.mkdir(path.join(__dirname, `../data/users`)),
        fsp.mkdir(path.join(__dirname, `../data/games`))
    ]))
    .then(() => Promise.all(
        data.map(({ fullname, email, password, games }) =>
            bcrypt.hash(password, 10)
                .then(hash =>
                    User.create({ fullname, email, password: hash })
                        .then(({ _id }) =>
                            Promise.all(games.map(({ name, image, description, gameconsole, budget }) =>
                                Game.create({ name, image, description, gameconsole, budget, owner: _id })
                                    .then(({ _id }) =>
                                        new Promise((resolve, reject) => {
                                            const rs = fs.createReadStream(path.join(__dirname, `./games/${image}.jpg`))
                                            const ws = fs.createWriteStream(path.join(__dirname, `../data/games/${_id}.jpg`))

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