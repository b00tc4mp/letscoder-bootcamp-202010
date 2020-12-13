require('dotenv').config()

const mongoose = require('mongoose')
const registerUser = require('./register-user')

const { env: { MONGODB_URL } } = process

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => registerUser('Pa Járito', 'pajarin@mail.com', '123123123').then(console.log).catch(console.error))
    .catch(console.error)
    .then(() => mongoose.disconnect())
    .then(() => console.log('ended'))