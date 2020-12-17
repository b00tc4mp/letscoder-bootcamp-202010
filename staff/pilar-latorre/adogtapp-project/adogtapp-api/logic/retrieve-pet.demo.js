require('dotenv').config()

const mongoose= require('mongoose')
const retrievePet = require('./retrieve-pet')

const { env: { MONGODB_URL }} =process

mongoose.connect(MONGODB_URL, {useUnifiedTopology: true, useNewUrlParser:true, useCreateIndex: true})
    .then(()=> retrievePet('5fccb7d73bfba44238f0386d'))
    .then(console.log)
    .catch(console.error)
    .then(mongoose.disconnect)