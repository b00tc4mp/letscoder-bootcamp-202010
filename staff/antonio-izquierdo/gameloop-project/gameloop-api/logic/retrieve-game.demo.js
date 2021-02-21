require('dotenv').config()
const { mongoose } = require('gameloop-data')
const retrieveGame = require('./retrieve-game')

const { env: { MONGODB_URL }} =process

mongoose.connect(MONGODB_URL, {useUnifiedTopology: true, useNewUrlParser:true, useCreateIndex: true})
    .then(()=> retrieveGame('5fdb59db1e1940098097288d'))
    .then(console.log)
    .catch(console.error)
    .then(mongoose.disconnect)


