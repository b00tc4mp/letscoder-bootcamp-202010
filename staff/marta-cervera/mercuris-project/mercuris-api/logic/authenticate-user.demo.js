require('dotenv'). config()

const mongoose = require('mongoose')
const authenticateUser= require('./authenticate-user')

const { env: { MONGODB_URL}} = process

mongoose.connect(MONGODB_URL, {useUnifiedTopology: true, useNewUrlParser:true, useCreateIndex: true})
    .then(()=> authenticateUser('cerve@pisci.com', '123456'))
    .then(console.log)
    .catch(console.error)
    .then(mongoose.disconnect)