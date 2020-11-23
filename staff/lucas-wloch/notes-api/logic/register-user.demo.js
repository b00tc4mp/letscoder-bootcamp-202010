require('dotenv').config()
const { MongoClient } = require('mongodb')
const context = require('./context')

const registerUser = require('./register-user')

const { env: { MONGODB_URL } } = process

const client = new MongoClient(MONGODB_URL, { useUnifiedTopology: true })

client.connect((error, connection) => {
    if (error) return console.error(error)

    context.connection = connection

    registerUser('Lucas 1', 'lucas1@mail.com', '123', console.log)
    registerUser('Juan 1', 'Juan1@mail.com', '123', console.log)
    registerUser('Pepita 1', 'pepita1@mail.com', '123', console.log)
    registerUser('juanita 1', 'juanita1@mail.com', '123', console.log)
})