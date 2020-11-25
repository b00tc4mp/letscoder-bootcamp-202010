require('dotenv').config()
const { MongoClient } = require('mongodb')
const context = require('./context')

const { env: { MONGODB_URL } } = process

console.log(MONGODB_URL)

const client = new MongoClient(MONGODB_URL, { useUnifiedTopology: true })

const { saveNote } = require('./index')

return client
    .connect()
    .then(connection => {

    context.connection = connection

    // saveNote('1605799287806306572291313610430', 'Hola, Beto!', ['code', 'demo', 'bootcamp'], '1605718707109104439437083615920', 'private', console.log)

    // saveNote(undefined, 'Code, eat, sleep and repeat!',['bootcamp'], '1605718707109104439437083615920', 'private', console.log)
    try {
        saveNote('5fb8fad9a15a822fff0a201b', '5fbd1b386364e14fbbcd5453', 'Test promises2', ['promises', 'refactor'], 'public')
        .then(() => console.log('note added'))
        .catch(error => console.error('note could not be saved', error))
        // .then(() => client.close())
        // .then(() => console.log('connection closed'))
        
    } catch (error) {
        console.log('validation error', error)
    }
})