require('dotenv').config()
const { mongoose } = require('gameloop-data')
const retrieveUserGames = require('./retrieve-user-games')

const { env: { MONGODB_URL }} =process

mongoose.connect(MONGODB_URL, {useUnifiedTopology: true, useNewUrlParser:true, useCreateIndex: true})
    .then(()=> retrieveUserGames('5fd8f18e40fe20048cacf2f1'))
    .then(console.log)
    .catch(console.error)
    .then(mongoose.disconnect)
