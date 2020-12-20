require('dotenv').config()

const mongoose = require('mongoose')

const toggleFollowUser = require ('./toggle-follow-user')

const { env: { MONGODB_URL } } = process


mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true})
    .then(() => {
        try {
            toggleFollowUser('5fbfe34b25c054a94e22253f', '5fbfe8ac3b0c41aa74c830f0')
            .then(() => console.log('you added or removed a follow'))
            .catch(console.log)
            .then(() => mongoose.disconnect())
            .then(() => console.log('client disconnected'))
        } catch (error) {
            console.log(error)
        }
    })
