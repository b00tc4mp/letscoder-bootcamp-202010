require('dotenv').config()

const mongoose= require('mongoose')
const deletePet = require('./delete-pet')

const { env: { MONGODB_URL }} =process

mongoose.connect(MONGODB_URL, {useUnifiedTopology: true, useNewUrlParser:true, useCreateIndex: true})
    .then(()=> deletePet('5fce0a01abbb8577a8b44992'))
    .then(console.log)
    .catch(console.error)
    .then(mongoose.disconnect)