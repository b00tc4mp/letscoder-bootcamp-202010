require('dotenv').config()

const mongoose = require('mongoose')
const createGame = require('../create-game')
const { random } = Math
const { env: { MONGODB_URL } } = process


mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
    .then(() => createGame("http://localhost:4000/id_game",[],[],'5fcd01766aba86f4eea4257c',[],'5fcbffce7f06433c78f3193e' ))
    .then(console.log)
    .catch(console.error)
    .then(mongoose.disconnect)