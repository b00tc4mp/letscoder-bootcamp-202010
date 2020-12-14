require('dotenv').config()
const { mongoose } = require('gameloop-data')
const retrieveGame = require('./retrieve-game')

const { env: { MONGODB_URL }} =process

mongoose.connect(MONGODB_URL, {useUnifiedTopology: true, useNewUrlParser:true, useCreateIndex: true})
    .then(()=> retrieveGame('5fd7844e56dd3c3c881089a4'))
    .then(console.log)
    .catch(console.error)
    .then(mongoose.disconnect)


