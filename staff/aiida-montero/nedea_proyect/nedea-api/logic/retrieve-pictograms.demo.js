require('dotenv').config()

const mongoose = require('mongoose')
const retrievePictograms = require('./retrieve-pictograms')

const { env: { MONGODB_URL } } = process

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => retrievePictograms('5fca113a7be0e23dacaba656'))
    .then(console.log)
    .then(mongoose.disconnect)