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
    retrieveNotes('5fbd3176423461a9261e64e1')
    .then(() => console.log('note retrieved'))
    .catch(error => console.error('note could not be retrieved'))
    .then(() => client.close())
    .then(() => console.log('connection closed'))
    } catch (error) {
        console.log(error.message)
    }
}) 