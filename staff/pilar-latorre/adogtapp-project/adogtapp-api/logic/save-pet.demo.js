require('dotenv').config()

const mongoose = require('mongoose')
const savePet = require('./save-pet')
const { Pet } = require('../models')

const { env: { MONGODB_URL } } = process

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => Pet.deleteMany())
    .then(() => Promise.all([
        savePet(undefined,'India', 'no tiene', 'multicolor pero mas negra','kasjfkjasdfljkasdjflkasjfdkljsafdkljaskdflj', '5fc629cead96ca6b10a63836').then(console.log).catch(console.error),


      
    ])
    )
    .catch(console.error)
    .then(() => mongoose.disconnect())
    .then(() => console.log('ended'))