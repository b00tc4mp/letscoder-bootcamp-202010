require('dotenv').config()

const mongoose = require('mongoose')
const { env: { MONGODB_URL } } = process

const authenticateUser = require('./authenticate-user')

mongoose
        .connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true})
        .then(() => {
        try {
            authenticateUser('pajarin@gmail.com', '123')
            .then(() => console.log('successfull authentication'))
            .catch(console.log)
            .then(() => mongoose.disconnect())
            
        } catch (error) {
            console.log('validation error', error)
        }


})

