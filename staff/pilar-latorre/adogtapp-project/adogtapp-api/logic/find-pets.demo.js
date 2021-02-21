require('dotenv').config()
const mongoose = require('mongoose')
const { env: { MONGODB_URL } } = process


const findPets = require('./find-pets')

mongoose.connect( MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true})
    .then(() => {
    try {
        //findPets('5fc91d9b4127ae64a8012234',undefined, undefined, 'garrita', undefined, undefined)
        findPets('5fc91d9b4127ae64a8012234',undefined, 'zaragoza', 'garrita', 'cat', undefined)
        .then(pets => console.log(pets))
        .catch(error => console.log('could not retrieve any pet', error))
        .then(() => mongoose.disconnect())
        .then(() => console.log('connection closed'))

    } catch (error) {
        console.log('validation error', error)

      
    }

})