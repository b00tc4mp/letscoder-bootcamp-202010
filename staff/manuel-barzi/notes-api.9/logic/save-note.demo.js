require('dotenv').config()

const mongoose = require('mongoose')
const saveNote = require('./save-note')

const { env: { MONGODB_URL } } = process

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    // .then(() => saveNote('5fca5b424d1115677f6fe2e6', undefined, 'Hello, World!', ['hello', 'world'], 'private'))
    .then(() => saveNote('5fca5b424d1115677f6fe2e6', undefined, 'Hola, Mundo!', ['hola', 'mundo'], 'public'))
    .then(() => console.log('note saved'))
    .catch(error => console.error('note could not be saved', error))
    .then(mongoose.disconnect)
