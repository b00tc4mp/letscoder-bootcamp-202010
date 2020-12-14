require('dotenv').config()

const mongoose= require('mongoose')
const retrieveProduct = require('./retrieve-product')

const { env: { MONGODB_URL }} =process

mongoose.connect(MONGODB_URL, {useUnifiedTopology: true, useNewUrlParser:true, useCreateIndex: true})
    .then(()=> retrieveProduct('5fcd0b83c027833e8c661354'))
    .then(console.log)
    .catch(console.error)
    .then(mongoose.disconnect)