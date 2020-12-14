require('dotenv').config()

const mongoose= require('mongoose')
const retrieveProductDetail = require('./retrieve-product-detail')

const { env: { MONGODB_URL }} =process

mongoose.connect(MONGODB_URL, {useUnifiedTopology: true, useNewUrlParser:true, useCreateIndex: true})
    .then(()=> retrieveProductDetail('5fd127ec656b1c4f045319b7'))
    .then(console.log)
    .catch(console.error)
    .then(mongoose.disconnect)