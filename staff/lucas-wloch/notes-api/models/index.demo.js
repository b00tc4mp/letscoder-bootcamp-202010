require('dotenv').config()
const mongoose = require('mongoose')
const { User, Note } = require('.')

const { env: { MONGO_URL } } = process

mongoose.connect(MONGO_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        const user = new User({
            fullname: 'Ele Fante',
            email: 'ele@fante.com',
            password: '123'
        })

        const note = new Note({
            owner: user.id, //user._id.toString()
            text: 'Hola Mundo!',
            tags: ['hello', 'world'],
            visibility: 'public'
        })

        return Promise.all([user.save(), note.save()])
    })
    .catch(console.error)
    .then(() => mongoose.disconnect())
    .then(() => console.log('ended'))