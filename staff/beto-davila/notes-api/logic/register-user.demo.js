require('dotenv').config()

const mongoose = require('mongoose')

const registerUser = require('./register-user')

const { env: { MONGODB_URL } } = process

mongoose
    .connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true})
    .then(() => {
    try {
            registerUser('Paja Rito', 'pajarin@gmail.com', '123')
            .then(() => console.log('user registered'))
            .catch(error => console.log('user could not be registered:', error))
            .then(() => mongoose.disconnect())
            .then(() => console.log('client disconnected'))
            
        } catch (error) {
            console.log('validation error', error)
        }

})