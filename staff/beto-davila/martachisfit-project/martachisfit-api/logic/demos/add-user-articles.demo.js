require('dotenv').config()
const mongoose = require('mongoose')

const { MONGODB_URL } = process.env

const addUserArticles = require('./add-user-articles')

mongoose.connect(MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
    try {
        addUserArticles('5fc88dd7cbd21a627faef14b', '5fc927bdb87a0c980a11c6bf')
        .then(() => console.log('The article was added'))
        .catch(error => console.log('could not add the requested article', error))
        .then(() => mongoose.disconnect())
        .then(() => console.log('client closed'))
        
    } catch (error) {
        console.log('validation error', error)
    }

})