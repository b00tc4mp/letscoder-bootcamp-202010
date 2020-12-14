require('dotenv').config()

const mongoose = require('mongoose')
const saveGame = require('./save-game')
const { Game } = require('../models')

const { env: { MONGODB_URL } } = process

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
            .then(() => Game.deleteMany())
            .then(() => Promise.all([
                
                //JUEGOS DE PEDRO PICAPIEDRA
                saveGame(undefined, 'Call Of Duty', 'Juego numero 1', 'nintendo ds', '33', '5fd5e8f37d091303d0eeb8d4'),
                saveGame(undefined, 'Crash Bandicoot', 'Juego numero 2', 'nintendo 3ds', '15', '5fd5e8f37d091303d0eeb8d4'),
                saveGame(undefined, 'Super Mario Bros', 'Juego numero 3', 'play station 1', '26', '5fd5e8f37d091303d0eeb8d4'),
                saveGame(undefined, 'Luigis Mansion', 'Juego numero 4', 'xbox', '29', '5fd5e8f37d091303d0eeb8d4'),

                //JUEGOS DE PEPIGRIS
                saveGame(undefined, 'Tetrix', 'Juego numero 5', 'nintendo switch', '12', '5fd5e8f37d091303d0eeb8d5'),
                saveGame(undefined, 'Detective Pikachu', 'Juego numero 6', 'game boy advance', '32', '5fd5e8f37d091303d0eeb8d5'),
                saveGame(undefined, 'The Legend of Zelda', 'Juego numero 7', 'play station 3', '18', '5fd5e8f37d091303d0eeb8d5'),
                saveGame(undefined, 'Luigis Mansion', 'Juego numero 8', 'play station 5', '23', '5fd5e8f37d091303d0eeb8d5')
            ])
            )
            .catch(console.error)
            .then(() => mongoose.disconnect())
            .then(() => console.log('ended'))
        