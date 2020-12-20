require('dotenv').config()

const { User, Note } = require('./')

const { MONGODB_URL } = process.env
const mongoose = require('mongoose')

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        const user = new User({
            fullname: 'Beto Davila',
            email: 'dagoman19@gmail.com',
            password: '123'
        })

        const note = new Note({
            owner: user.id, // user._id.toString()
            text: 'Primer texto en Mongoose',
            tags: ['mongoose', 'newbie'],
            visibility: 'public'
        })

        return Promise.all([user.save(), note.save()])
    })
    .catch(console.error)
    .then(() => mongoose.disconnect())
    .then(() => console.log('done'))