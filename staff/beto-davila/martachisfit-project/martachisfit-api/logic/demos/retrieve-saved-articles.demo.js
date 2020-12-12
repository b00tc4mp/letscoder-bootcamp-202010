require('dotenv').config()
const mongoose = require('mongoose')

const { MONGODB_URL } = process.env

const retrieveSavedArticles = require('./retrieve-saved-articles')

mongoose.connect(MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
    try {
        retrieveSavedArticles('5fc88dd7cbd21a627faef14b')
        .then(console.log)
        .then(result => {})
        .catch(error => console.log('could not find any saved articles', error))
        .then(() => mongoose.disconnect())
        .then(() => console.log('client closed'))
        
    } catch (error) {
        console.log('validation error', error)
    }

})