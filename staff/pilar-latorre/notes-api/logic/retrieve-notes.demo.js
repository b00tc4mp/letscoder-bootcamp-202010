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
        retrieveNotes('5fbd3c718be4e51c588a5c7a')
            .then(() => console.log('notes retrieve'))
            .catch(error => console.error('note could not be retrieve', error))
            .then(() => client.close())
            .then(() => console.log('connection closed'))
  
    } catch (error) {
        console.log('validation error', error)
    }
}) 

