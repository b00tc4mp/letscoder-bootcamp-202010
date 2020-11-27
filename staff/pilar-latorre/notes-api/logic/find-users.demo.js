require('dotenv').config()
const mongoose = require('mongoose')
const { env: { MONGODB_URL } } = process

const findUsers = require('./find-users')

mongoose.connect( MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true})
    .then(() => {
    try {
        findUsers('perrito')
        .then(notes => console.log(notes))
        .catch(error => console.log('could not retrieve any note', error))
        .then(() => mongoose.disconnect())
        .then(() => console.log('connection closed'))
        
    } catch (error) {
        console.log('validation error', error)
    }

})