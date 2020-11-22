require('dotenv').config()
const { MongoClient } = require('mongodb')
const context = require('./context')

const { env: { MONGODB_URL } } = process

const client = new MongoClient(MONGODB_URL, { useUnifiedTopology: true })
const retrieveNotes = require('./retrieve-notes')

client.connect((error, connection) => {
    if (error) return console.error(error)

    context.connection = connection

    retrieveNotes('5fb898ff3a550d5535a9963d', console.log)

})