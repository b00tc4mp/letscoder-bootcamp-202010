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

    saveNote( undefined, 'Desinstalar Mongo HOY!',['mongo', 'uninstall', 'arbolada'],"5fba62c39633f535c432b630", 'private', console.log)
})