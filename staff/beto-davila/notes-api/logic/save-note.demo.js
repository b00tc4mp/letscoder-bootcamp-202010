require('dotenv').config()

const mongoose = require('mongoose')
const { env: { MONGODB_URL } } = process

const { saveNote } = require('./index')

mongoose
    .connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true})
    .then(() => {

    // saveNote('1605799287806306572291313610430', 'Hola, Beto!', ['code', 'demo', 'bootcamp'], '1605718707109104439437083615920', 'private', console.log)

    // saveNote(undefined, 'Code, eat, sleep and repeat!',['bootcamp'], '1605718707109104439437083615920', 'private', console.log)
    try {
        saveNote('5fbfe8ac3b0c41aa74c830f0', undefined, 'Testing mongoose', ['mongoose', 'promises'], 'public')
        .then(() => console.log('note added'))
        .catch(error => console.error('note could not be saved', error))
        .then(() => mongoose.disconnect())
        .then(() => console.log('connection closed'))
        
    } catch (error) {
        console.log('validation error', error)
    }
})