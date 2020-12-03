require('dotenv').config()
const mongoose = require('mongoose')
const { env: { MONGODB_URL } } = process


const retrievePets = require('./retrieve-pets')

mongoose.connect( MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true})
    .then(() => {
    try {
        retrievePets('perrito')
        .then(pets => console.log(pets))
        .catch(error => console.log('could not retrieve any pet', error))
        .then(() => mongoose.disconnect())
        .then(() => console.log('connection closed'))

    } catch (error) {
        console.log('validation error', error)
    }

})