require('dotenv').config()

const mongoose = require('mongoose')
const authenticateUser = require('./authenticate-user')

const { env: { MONGODB_URL } } = process

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
    .then(() => authenticateUser('aidamontero24@gmail.com', '123'))
    .then(console.log)
    .catch(console.error)
    .then(mongoose.disconnect)