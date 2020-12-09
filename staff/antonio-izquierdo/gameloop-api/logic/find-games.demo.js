require('dotenv').config()
const mongoose = require('mongoose')
const { env: { MONGODB_URL } } = process

const findGames = require('./find-games')

mongoose.connect( MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true})
    .then(() => {
    try {
        findGames(undefined, undefined, undefined, undefined, undefined)
        .then(games => console.log(games))
        .catch(error => console.log('could not retrieve any game', error))
        .then(() => mongoose.disconnect())
        .then(() => console.log('connection closed'))

    } catch (error) {
        console.log('validation error', error)
    }
})