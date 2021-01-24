require('dotenv').config()

const mongoose = require('mongoose')
const savePictogram = require('./save-pictogram')
const { models: { User } } = require('nedea-data')
const {Pictogram} = require('../models')

const { env: { MONGODB_URL } } = process

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => Promise.all([
        savePictogram(undefined, '5fc75a7872f1f44768952413', 'Agua', 'beber agua').then(console.log).catch(console.error),
       
    ])
    )
    .catch(console.error)
    .then(() => mongoose.disconnect())
    .then(() => console.log('ended'))