const { models: { Game } } = require('geogin-data')
const retrieveGame = require('../retrieve-game')
const { mongoose } = require('geogin-data')

MONGODB_URL = 'mongodb://localhost:27017/geogin-app'

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
    .then(() => retrieveGame('5fd888153b569e0cfcc845be'))
    .then(console.log)
    .catch(console.error)
    .then(mongoose.disconnect)