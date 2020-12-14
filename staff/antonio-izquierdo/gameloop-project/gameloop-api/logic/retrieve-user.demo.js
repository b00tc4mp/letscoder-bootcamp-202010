require('dotenv').config()

const mongoose = require('mongoose')
const retrieveUser = require('./retrieve-user')

const { env: { MONGODB_URL } } = process

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })

.then(() => retrieveUser('5fc66255a9f8900080b5c5e9'))
    .then(console.log)
    .catch(console.error)
    .then(mongoose.disconnect)