require('dotenv').config()
const { MongoClient } = require('mongodb')
const context = require('./context')

const saveNote = require('./save-note')

const { env: { MONGODB_URL } } = process

const client = new MongoClient(MONGODB_URL, { useUnifiedTopology: true })

client.connect((error, connection) => {
    if (error) return console.error(error)

    context.connection = connection

    // saveNote('1605799287806306572291313610430', 'Hola, Beto!', ['code', 'demo', 'bootcamp'], '1605718707109104439437083615920', 'private', console.log)

    // saveNote(undefined, 'Code, eat, sleep and repeat!',['bootcamp'], '1605718707109104439437083615920', 'private', console.log)

    saveNote('5fb8fad9a15a822fff0a201b', undefined, 'Preparar las comidas de la semana',['casa', 'comidas', 'semana'], 'public', console.log)
})