require('dotenv').config()
const mongoose = require('mongoose')
const { User } = require('../models')

const { MONGODB_URL } = process.env

const searchUsers = require('./search-users')

mongoose.connect(MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
    try {
        searchUsers('hola')
        .then(users => console.log('The result of your search:', users))
        .catch(error => console.log('could not find any match', error))
        .then(() => mongoose.disconnect())
        .then(() => console.log('client closed'))
        
    } catch (error) {
        console.log('validation error', error)
    }

})