require('dotenv').config()
const SaveOnDisc = require('./Save-on-disc')
const mongoose = require('mongoose')

const { env: { MONGODB_URL } } = process

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
    // .then(() => Promise.all([SaveOnDisc()]))
    .then(() => SaveOnDisc())
    .then(() => console.log)
    .catch(console.error)
    .then(() => mongoose.disconnect())
    .then(() => console.log('ended'))



