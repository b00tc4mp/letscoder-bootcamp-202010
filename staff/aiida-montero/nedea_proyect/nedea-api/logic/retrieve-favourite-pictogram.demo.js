require('dotenv').config()

const mongoose = require('mongoose')
const retrieveFavouritePictogram = require('./retrieve-favourite-pictogram')

const { env: { MONGODB_URL } } = process

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => retrieveFavouritePictogram('5fd25bc941889f27aca6e16c' ))
    .then(console.log,'ha salido el puto retriev')
    .then(mongoose.disconnect)