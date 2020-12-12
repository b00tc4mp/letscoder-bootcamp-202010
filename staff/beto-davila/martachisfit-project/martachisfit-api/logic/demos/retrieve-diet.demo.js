require('dotenv').config()
const mongoose = require('mongoose')

const { MONGODB_URL } = process.env

const { retrieveDiet } = require('.')

mongoose.connect(MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
    try {
        retrieveDiet('5fc88dd7cbd21a627faef14b')
        .then(diet => console.log(diet))
        .catch(error => console.log('could not retrieve diet', error))
        .then(() => mongoose.disconnect())
        .then(() => console.log('client closed'))
        
    } catch (error) {
        console.log('validation error', error)
    }

})