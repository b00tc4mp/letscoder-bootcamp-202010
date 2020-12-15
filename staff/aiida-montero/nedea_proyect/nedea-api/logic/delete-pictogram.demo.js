require('dotenv').config()

const mongoose = require('mongoose')
const deletePictogram = require('./delete-pictogram')
const { models: { User } } = require('nedea-data')
const {Pictogram} = require('../models')

const { env: { MONGODB_URL } } = process

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => Promise.all([
        deletePictogram('5fd4fe5ecf2bf40e6cc7ec21', '5fd25bc941889f27aca6e16c').then(console.log).catch(console.error),
       
    ])
    )
    .catch(console.error)
    .then(() => mongoose.disconnect())
    .then(() => console.log('ended'))