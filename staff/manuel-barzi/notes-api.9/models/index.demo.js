require('dotenv').config()
const { User, Note } = require('.')

const { env: { MONGODB_URL } } = process

const mongoose = require('mongoose')

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        const user = new User({
            fullname: 'Ele Fante',
            email: 'ele@fante.com',
            password: '123123123'
        })

        const note = new Note({
            owner: user.id, // user._id.toString()
            text: 'Hola, Mundo!',
            tags: ['helloworld'],
            visibility: 'public'
        })

        return Promise.all([user.save(), note.save()])
    })
    .catch(console.error)
    .then(() => mongoose.disconnect())
    .then(() => console.log('ended'))