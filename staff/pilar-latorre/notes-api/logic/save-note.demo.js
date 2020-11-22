require('dotenv').config()
const { MongoClient } = require('mongodb')
const context = require('./context')

const saveNote = require('./save-note')

const { env: { MONGODB_URL } } = process

const client = new MongoClient(MONGODB_URL, { useUnifiedTopology: true })

client.connect((error, connection) => {
    if (error) return console.error(error)

    context.connection = connection

    saveNote(undefined, 'Ayudar a los chavales',['mongo', 'crisis', 'finde'],'5fb8f86644948c23d87319c0', 'public', console.log)
})