require('dotenv').config()
const mongoose = require('mongoose')

const registerUser = require('./register-user')

const { env: { MONGODB_URL } } = process


mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then( () => registerUser('alfredo', 'alfredo@mail.com', '123', console.log))
    .catch(console.error)
    .then( () => mongoose.disconect())
    .then( () => console.log('endend'))