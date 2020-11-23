require('dotenv').config()
const { MongoClient } = require('mongodb')
const context = require('./context')

const { env: { MONGODB_URL } } = process

console.log(MONGODB_URL)

const client = new MongoClient(MONGODB_URL, { useUnifiedTopology: true })

const { saveNote } = require('./index')

client.connect((error, connection) => {
    if (error) return console.error(error)

    context.connection = connection

    // saveNote('1605799287806306572291313610430', 'Hola, Beto!', ['code', 'demo', 'bootcamp'], '1605718707109104439437083615920', 'private', console.log)

    // saveNote(undefined, 'Code, eat, sleep and repeat!',['bootcamp'], '1605718707109104439437083615920', 'private', console.log)

    saveNote('5fb8fad9a15a822fff0a201b', undefined, 'Tarea', ['project', 'comenzamos'], 'private', console.log)
})