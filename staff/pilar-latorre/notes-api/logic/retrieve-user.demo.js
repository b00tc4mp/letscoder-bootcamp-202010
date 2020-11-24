require('dotenv').config()

const { MongoClient } = require('mongodb')
const context = require('./context')
const retrieveUser = require('./retrieve-user')

const { env: { MONGODB_URL } } = process

const client = new MongoClient(MONGODB_URL, { useUnifiedTopology: true })

client.connect((error, connection) => {
    if (error) return console.error(error)

    context.connection = connection

    try {
        retrieveUser('5fbd31ba3fcbd02d4023da45')
            .then(() => console.log('user retrieved'))
            .catch(error => console.error('user could not be retrieved', error))
            .then(() => client.close())
            .then(() => console.log('connection closed'))
  
    } catch (error) {
        console.log('validation error', error)
    }
}) 

