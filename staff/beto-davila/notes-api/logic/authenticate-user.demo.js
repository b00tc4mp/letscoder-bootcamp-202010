require('dotenv').config()

const { MongoClient } = require('mongodb')
const context = require('./context')

const { env: { MONGODB_URL } } = process

const authenticateUser = require('./authenticate-user')
const client = new MongoClient(MONGODB_URL, { useUnifiedTopology: true })

client.connect((error, connection) => {
    if (error) return console.error(error)

    context.connection = connection

authenticateUser('dagoman19@gmail.com', '123', console.log)

})

