require('dotenv').config()
const mongoose = require('mongoose')
const { env: { MONGODB_URL } } = process


const findPetsByShelter = require('./find-pets-by-shelter')

mongoose.connect( MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true})
    .then(() => {
    try {
        findPetsByShelter('5fc6432b55ef9755202110cb')
        .then(pets => console.log(pets))
        .catch(error => console.log('could not retrieve any pet', error))
        .then(() => mongoose.disconnect())
        .then(() => console.log('connection closed'))

    } catch (error) {
        console.log('validation error', error)
    }

}) 