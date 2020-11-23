require('dotenv').config()

const { MongoClient } = require('mongodb')
const context = require('./context')
const saveNote = require('./save-note')

const { env: { MONGODB_URL } } = process

const client = new MongoClient(MONGODB_URL, { useUnifiedTopology: true })

client.connect((error, connection) => {
    if (error) return console.error(error)

    context.connection = connection

    //saveNote('5fb7f43bcf65c468175af431', undefined, 'Hello, World!', ['hello', 'world'], 'private', console.log)
    //saveNote('5fb7f43bcf65c468175af431', '5fbb7dc5f6eb5f8ec3d55dd1', 'Hola, Mundo!', ['hola', 'mundo'], 'public', console.log)
    //saveNote('5fb7f43bcf65c468175af432', '5fbb7dc5f6eb5f8ec3d55dd1', 'Hola, Mundo!', ['hola', 'mundo'], 'public', console.log)
    saveNote('5fb7f43bcf65c468175af431', '5fbb7dc5f6eb5f8ec3d55dd2', 'Hola, Mundo!', ['hola', 'mundo'], 'public', console.log)
})