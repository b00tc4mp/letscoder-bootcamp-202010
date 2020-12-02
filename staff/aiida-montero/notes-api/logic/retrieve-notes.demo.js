require('dotenv').config()

const { MongoClient } = require('mongodb')
const context = require('./context')
const retrieveNotes = require('./retrieve-notes')

const { env: { MONGODB_URL } } = process

const client = new MongoClient(MONGODB_URL, { useUnifiedTopology: true })

client.connect((error, connection) => {
    if (error) return console.error(error)

    context.connection = connection

    try {
        retrieveNotes('5fb96af285af672320515101')
            .then(() => console.log('user retrieved'))
            .catch(error => console.error('user could not be retrieved', error))
            .then(() => client.close())
            .then(() => console.log('connection closed'))
  
    } catch (error) {
        console.log('validation error', error)
    }
})