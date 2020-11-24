require('dotenv').config()

const { MongoClient } = require('mongodb')
const context = require('./context')
const registerUser = require('./register-user')

const { env: { MONGODB_URL } } = process

const client = new MongoClient(MONGODB_URL, { useUnifiedTopology: true })

client.connect((error, connection) => {
    if (error) return console.error(error)

    context.connection = connection

    try {
        registerUser('monito', 'mo@no.es', '123')
            .then(() => console.log('user registered'))
            .catch(error => console.error('user could not be registered', error))
            .then(() => client.close())
            .then(() => console.log('connection closed'))
  
    } catch (error) {
        console.log('validation error', error)
    }
}) 


