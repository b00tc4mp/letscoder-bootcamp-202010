require('dotenv').config()
const mongoose = require('mongoose')

const { MONGODB_URL } = process.env

const findFood = require('./find-food')

mongoose.connect(MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
    try {
        findFood('avena')
        .then(food => console.log('The result of your search:', food))
        .catch(error => console.log('could not find any match', error))
        .then(() => mongoose.disconnect())
        .then(() => console.log('client closed'))
        
    } catch (error) {
        console.log('validation error', error)
    }

})