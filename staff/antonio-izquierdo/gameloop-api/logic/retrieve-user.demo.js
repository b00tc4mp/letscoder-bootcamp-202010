require('dotenv').config()

const mongoose = require('mongoose')
const retrieveUser = require('./retrieve-user')

const { env: { MONGODB_URL } } = process

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })

.then(() => retrieveUser('5fc672e46ea2d105b028d806'))
    .then(console.log)
    .catch(console.error)
    .then(mongoose.disconnect)