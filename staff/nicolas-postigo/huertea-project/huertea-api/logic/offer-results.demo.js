/* require('dotenv').config()
const mongoose = require('mongoose')
const { env: { MONGODB_URL } } = process

const findOffer = require('./offer-results.js')

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {

        try {
            findOffer(undefined, 'kilos', undefined)
                .then(() => mongoose.disconnect())



        } catch (error) {

        }

    }) */