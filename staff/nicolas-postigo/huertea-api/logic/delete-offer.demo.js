require('dotenv').config()

const mongoose = require('mongoose')
const deleteOffer = require('./delete-offer')
const { Offer } = require('../models')
const { env: { MONGODB_URL } } = process

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => deleteOffer('5fc918e8a5dc9b2c8cddcaf7','5fd0ae3a869feb03b07713c5', 'patasss', 'patas', 2))
    .catch(error => console.error('not deleted', error))
    .then(mongoose.disconnect)
