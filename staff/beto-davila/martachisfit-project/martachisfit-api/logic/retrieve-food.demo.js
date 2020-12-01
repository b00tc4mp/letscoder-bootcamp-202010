require('dotenv').config()
const mongoose = require('mongoose')

const { MONGODB_URL } = process.env

const { retrieveFood } = require('.')

mongoose.connect(MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
    try {
        retrieveFood('5fc6298de855a20e283444a4')
        .then(food => console.log(food))
        .catch(error => console.log('could not retrieve food', error))
        .then(() => mongoose.disconnect())
        .then(() => console.log('client closed'))
        
    } catch (error) {
        console.log('validation error', error)
    }

})