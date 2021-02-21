require('dotenv').config()
const mongoose = require('mongoose')

const { MONGODB_URL } = process.env

const { retrieveArticles } = require('.')

mongoose.connect(MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
    try {
        retrieveArticles('5fc88dd7cbd21a627faef14b')
        .then(article => console.log(article))
        .catch(error => console.log('could not retrieve articles', error))
        .then(() => mongoose.disconnect())
        .then(() => console.log('client closed'))
        
    } catch (error) {
        console.log('validation error', error)
    }

})