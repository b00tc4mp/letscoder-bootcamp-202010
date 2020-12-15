require('dotenv').config()
const mongoose = require('mongoose')
const { env: { MONGODB_URL } } = process

const findOffer = require('./find-offer.js')

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {

        try {
            findOffer(undefined, 'kilos', undefined)
                .then(offers => console.log(offers))
                .catch(error => console.log('error when retrieving offers', error))
                .then(() => mongoose.disconnect())
                .then(() => console.log('conection closed'))


        } catch (error) {
            console.log('validation error', error)
        }

    })