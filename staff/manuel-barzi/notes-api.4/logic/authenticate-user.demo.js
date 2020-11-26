require('dotenv').config()

const { MongoClient } = require('mongodb')
const context = require('./context')
const authenticateUser = require('./authenticate-user')

const { env: { MONGODB_URL } } = process

const client = new MongoClient(MONGODB_URL, { useUnifiedTopology: true })

client.connect((error, connection) => {
    if (error) return console.error(error)

    context.connection = connection


    //authenticateUser('pepigri@mail.com', '123123123', console.log)
    authenticateUser('manuelbarzi@gmail.com', '123123123', console.log)
})