require('dotenv').config()

const { mongoose } = require('notes-data')
const retrieveUser = require('./retrieve-user')

const { env: { MONGODB_URL } } = process

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => retrieveUser('5fd3a2ce3b9f59fc79f47802'))
    .then(console.log)
    .then(mongoose.disconnect)