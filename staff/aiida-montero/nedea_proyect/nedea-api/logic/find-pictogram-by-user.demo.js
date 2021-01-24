require('dotenv').config()
const mongoose = require('mongoose')
const { env: { MONGODB_URL } } = process


const findPictogramByUser = require('./find-pictograms-by-user')

mongoose.connect( MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true})
    .then(() => {
    try {
        findPictogramByUser('5fca113a7be0e23dacaba656')
        .then(pictogram => console.log(pictogram))
        .catch(error => console.log('could not retrieve any agua', error))
        .then(() => mongoose.disconnect())
        .then(() => console.log('connection closed'))

    } catch (error) {
        console.log('validation error', error)
    }

})