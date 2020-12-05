require('dotenv').config()

const mongoose = require('mongoose')
const saveGame = require('./save-game')
const { Game } = require('../models')

const { env: { MONGODB_URL } } = process

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
            .then(() => Game.deleteMany())
            .then(() => Promise.all([
                
                //JUEGOS DE PEDRO PICAPIEDRA
                saveGame(undefined, 'Call Of Duty', 'Juego numero 1', 'nintendo', '33', '5fcb4a3b093dcc3624cacf06'),
                saveGame(undefined, 'Crash Bandicoot', 'Juego numero 2', 'nintendo', '15', '5fcb4a3b093dcc3624cacf06'),
                saveGame(undefined, 'Super Mario Bros', 'Juego numero 3', 'nintendo', '26', '5fcb4a3b093dcc3624cacf06'),
                saveGame(undefined, 'Luigis Mansion', 'Juego numero 4', 'nintendo', '29', '5fcb4a3b093dcc3624cacf06'),

                //JUEGOS DE PEPIGRIS
                saveGame(undefined, 'Tetrix', 'Juego numero 5', 'nintendo', '12', '5fcb4a3b093dcc3624cacf07'),
                saveGame(undefined, 'Detective Pikachu', 'Juego numero 6', 'nintendo', '32', '5fcb4a3b093dcc3624cacf07'),
                saveGame(undefined, 'The Legend of Zelda', 'Juego numero 7', 'nintendo', '18', '5fcb4a3b093dcc3624cacf07'),
                saveGame(undefined, 'Luigis Mansion', 'Juego numero 8', 'nintendo', '23', '5fcb4a3b093dcc3624cacf07')
            ])
            )
            .catch(console.error)
            .then(() => mongoose.disconnect())
            .then(() => console.log('ended'))
        