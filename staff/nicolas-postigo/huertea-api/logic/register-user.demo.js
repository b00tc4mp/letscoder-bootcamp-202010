require('dotenv').config()

const mongoose = require('mongoose')
const registerUser = require('./register-user')
const { User } = require('../models')

const { env: { MONGODB_URL } } = process

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => User.deleteMany())
    .then(() => Promise.all([
        registerUser('pedro', 'pedro@mail.com', 'pedropedropedro').then(console.log).catch(console.error)

    ])
    )
    .catch(console.error)
    .then(() => mongoose.disconnect())
    .then(() => console.log('ended'))