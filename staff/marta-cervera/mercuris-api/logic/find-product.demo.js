require('dotenv').config()
const mongoose = require('mongoose')
const { env: { MONGODB_URL } } = process


const findProducts = require('./find-product')

mongoose.connect( MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true})
    .then(() => {
    try {
        findProducts(undefined ,undefined, undefined, 2, 10)
        .then(products => console.log(products))
        .catch(error => console.log('could not retrieve any product', error))
        .then(() => mongoose.disconnect())
        .then(() => console.log('connection closed'))

    } catch (error) {
        console.log('validation error', error)

      
    }

})