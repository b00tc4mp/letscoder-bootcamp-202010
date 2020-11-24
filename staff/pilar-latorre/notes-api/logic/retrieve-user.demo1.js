/* const retrieveUser = require('./retrieve-user')

retrieveUser('1605100834183530418874468846100', console.log) */

require('dotenv').config()
const { MongoClient } = require('mongodb')
const context = require('./context')
const retrieveNotes = require('./retrieve-notes')

const retrieveNotes = require('./save-note')

const { env: { MONGODB_URL } } = process

const client = new MongoClient(MONGODB_URL, { useUnifiedTopology: true })

client.connect((error, connection) => {
    if (error) return console.error(error)

    context.connection = connection

    retrieveNotes('5fb8f86644948c23d87319c0', console.log)
})