require('dotenv').config()

const { mongoose } = require('notes-data')
const retrieveNotes = require('./retrieve-notes')

const { env: { MONGODB_URL } } = process

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => retrieveNotes('5fca5b424d1115677f6fe2e6'))
    .then(console.log)
    .then(mongoose.disconnect)