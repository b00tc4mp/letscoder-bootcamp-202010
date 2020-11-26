require('dotenv').config()
const { MongoClient } = require('mongodb')
const context = require('./context')

const { env: { MONGODB_URL } } = process

const client = new MongoClient(MONGODB_URL, { useUnifiedTopology: true })
const retrieveNotes = require('./retrieve-notes')

return client.connect()
    .then(connection => {

    context.connection = connection

    try {
        retrieveNotes('5fb8fad9a15a822fff0a201b')
        .then(notes => console.log(notes))
        .catch(error => console.log('could not retrieve any note', error))
        .then(() => client.close())
        .then(() => console.log('connection closed'))
        
    } catch (error) {
        console.log('validation error', error)
    }

})