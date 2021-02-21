require('dotenv').config()

const mongoose = require('mongoose')
const savePet = require('./save-pet')
const { Pet } = require('../models')

const { env: { MONGODB_URL } } = process

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => Pet.deleteMany())
    .then(() => Promise.all([
        savePet(undefined,'India', 'no tiene', 'dog','negro','la mejor perra pero con mala leche', '5fccb72f989a5757e03df82f').then(console.log).catch(console.error),

      
    ])
    )
    .catch(console.error)
    .then(() => mongoose.disconnect())
    .then(() => console.log('ended'))