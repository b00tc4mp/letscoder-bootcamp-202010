require('dotenv').config()
const mongoose = require('mongoose')

const { MONGODB_URL } = process.env

const retrieveSavedFood = require('./retrieve-saved-food')

mongoose.connect(MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
    try {
        retrieveSavedFood('5fc5147415ee83679fad5205')
        .then(result => console.log('Your saved food: ', result))
        .catch(error => console.log('could not find any saved food', error))
        .then(() => mongoose.disconnect())
        .then(() => console.log('client closed'))
        
    } catch (error) {
        console.log('validation error', error)
    }

})