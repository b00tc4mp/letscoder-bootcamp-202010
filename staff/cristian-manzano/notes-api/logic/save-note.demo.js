require('dotenv').config()

const { MongoClient } = require('mongodb')
const context = require('./context')
const saveNote = require('./save-note')

const { env: { MONGODB_URL } } = process

const client = new MongoClient(MONGODB_URL, { useUnifiedTopology: true })

client.connect((error, connection) => {
    if (error) return console.error(error)

    context.connection = connection

    try {
        saveNote('5fb8ff62d9831e15ab34f3fe', undefined, 'Hello, World!', ['hello', 'world'], 'private')
            .then(() => console.log('note saved'))
            .catch(error => console.error('note could not be saved', error))
            .then(() => client.close())
            .then(() => console.log('connection closed'))
        //saveNote('5fb7f43bcf65c468175af431', '5fbb7dc5f6eb5f8ec3d55dd1', 'Hola, Mundo!', ['hola', 'mundo'], 'public', console.log)
        //saveNote('5fb7f43bcf65c468175af432', '5fbb7dc5f6eb5f8ec3d55dd1', 'Hola, Mundo!', ['hola', 'mundo'], 'public', console.log)
        // saveNote('5fb7f43bcf65c468175af431', '5fbb7dc5f6eb5f8ec3d55dd2', 'Hola, Mundo!', ['hola', 'mundo'], 'public', console.log)
    } catch (error) {
        console.log('validation error', error)
    }
}) 