require('dotenv').config()

const mongoose = require('mongoose')
const saveGame = require('./save-game')
const { User } = require('./models')
const { Game } = require('../models')

const { env: { MONGODB_URL } } = process

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
            .then(() => Game.deleteMany())
            .then(() => Promise.all(
                saveGame('Call of Duty', 'juego seminuevo, el cd ta un poco rayao', 25, '5fc663222b84d2176ccfe6fc')
            )
            )
            .catch(console.error)
            .then(() => mongoose.disconnect())
            .then(() => console.log('ended'))
        