require('dotenv').config()

const mongoose = require('mongoose')
const deleteOffer = require('./delete-offer')
const { Offer } = require('../models')
const { env: { MONGODB_URL } } = process

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => deleteOffer('5fc62dcbf130984d9089d04e','5fc68cb189f23b16f416e24e'))
    .catch(error => console.error('not deleted', error))
    .then(mongoose.disconnect)
