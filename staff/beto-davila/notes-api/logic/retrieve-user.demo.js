require('dotenv').config()

const retrieveUser = require('./retrieve-user')
const mongoose = require('mongoose')
const { env: { MONGODB_URL } } = process


return mongoose.connect(MONGODB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
    .then(() => {
    try {
        retrieveUser('5fc137643b839bd272f736db')
        .then((user) => console.log(user))
        .catch(error => console.log('could not retrieve user', error))
        .then(() => mongoose.disconnect())
    } catch (error) {
        console.log ('validation error', error)
    }
})