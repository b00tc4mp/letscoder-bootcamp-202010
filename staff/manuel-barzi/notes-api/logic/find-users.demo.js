require('dotenv').config()

const { mongoose } = require('notes-data')
const findUsers = require('./find-users')

const { env: { MONGODB_URL } } = process

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
    .then(() => findUsers('Pepito'))
    .then(console.log)
    .catch(console.error)
    .then(mongoose.disconnect)