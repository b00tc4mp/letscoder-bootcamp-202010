require('dotenv').config()
const mongoose = require('mongoose')

const { MONGODB_URL } = process.env

const retrieveChosenArticle = require('./retrieve-chosen-article')

mongoose.connect(MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
    try {
        retrieveChosenArticle('5fc88dd7cbd21a627faef14b', '5fc9ec8147c1e4aa6bb54825')
        .then(console.log)
        .catch(error => console.log('could not retrieve the chosen article', error))
        .then(() => mongoose.disconnect())
        .then(() => console.log('client closed'))
        
    } catch (error) {
        console.log('validation error', error)
    }

})