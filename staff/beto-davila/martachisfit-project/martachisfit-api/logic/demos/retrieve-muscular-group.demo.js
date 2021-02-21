require('dotenv').config()
const mongoose = require('mongoose')

const { MONGODB_URL } = process.env

const { retrieveMuscularGroup } = require('../index')

mongoose.connect(MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
    try {
        retrieveMuscularGroup('biceps')
        .then(console.log)
        .catch(console.error)
        .then(() => mongoose.disconnect())
        .then(() => console.log('client closed'))
        
    } catch (error) {
        console.log('validation error', error)
    }

})