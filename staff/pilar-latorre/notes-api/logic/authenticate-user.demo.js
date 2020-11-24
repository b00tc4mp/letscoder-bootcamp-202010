require('dotenv').config()

const { MongoClient } = require('mongodb')
const context = require('./context')
const authenticateUser = require('./authenticate-user')

const { env: { MONGODB_URL } } = process

const client = new MongoClient(MONGODB_URL, { useUnifiedTopology: true })

client.connect((error, connection) => {
    if (error) return console.error(error)

    context.connection = connection

    try {
        authenticateUser('mo@no.es', '123')
            .then(() => console.log('user authenticated'))
            .catch(error => console.error('user could not be authenticated', error))
            .then(() => client.close())
            .then(() => console.log('connection closed'))
  
    } catch (error) {
        console.log('validation error', error)
    }
}) 