require('dotenv').config()
const mongoose = require('mongoose')

const { MONGODB_URL } = process.env

const { retrieveRecipes } = require('.')

mongoose.connect(MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
    try {
        retrieveRecipes('5fcb8e8b5ba966fcbe148dc1')
        .then(console.log)
        .catch(console.error)
        .then(() => mongoose.disconnect())
        .then(() => console.log('client closed'))
        
    } catch (error) {
        console.log('validation error', error)
    }

})