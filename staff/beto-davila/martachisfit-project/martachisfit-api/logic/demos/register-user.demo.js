require('dotenv').config()

const mongoose = require('mongoose')
const registerUser = require('./register-user')
// const { User } = require('martachisfit-data')

const { env: { MONGODB_URL } } = process

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    try {
        registerUser('Beto Dávila', 'beto@gmail.com', '123')
        .then(console.log)
        .catch(console.error)
        .then(() => mongoose.disconnect())
        .then(() => console.log('ended'))
        
    } catch (error) {
        console.log('validation error', error)
    }
 
    