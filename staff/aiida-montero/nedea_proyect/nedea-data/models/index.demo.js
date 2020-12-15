require('dotenv').config()
const { User, Pictogram } = require('.')

const { env: { MONGODB_URL  } } = process

const mongoose = require('mongoose')

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        const user = new User({
            fullname: 'Ele Fante',
            email: 'ele@fante.com',
            password: '123123123'
        })

        const pictogram = new Pictogram({
            owner: user.id, // user._id.toString()
            title: 'Hola, Mundo!',
        })

        return Promise.all([user.save(), pictogram.save()])
    })
    .catch(console.error)
    .then(() => mongoose.disconnect())
    .then(() => console.log('ended'))