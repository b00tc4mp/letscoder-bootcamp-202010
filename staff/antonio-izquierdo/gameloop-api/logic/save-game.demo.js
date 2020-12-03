require('dotenv').config()

const mongoose = require('mongoose')
const saveGame = require('./save-game')
const { Game } = require('../models')

const { env: { MONGODB_URL } } = process

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
            //.then(() => Game.deleteMany())
            .then(() => Promise.all([
                saveGame(undefined, 'Call Of Duty', 'Juego numero 3', '33', '5fc8b5cdb033c70968bc8629')
            ])
            )
            .catch(console.error)
            .then(() => mongoose.disconnect())
            .then(() => console.log('ended'))
        