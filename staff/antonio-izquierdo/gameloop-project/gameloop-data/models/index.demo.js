require('dotenv').config()
const { User, Game } = require('.')

const { env: { MONGODB_URL } } = process

const mongoose = require('mongoose')

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        const user = new User({
            fullname: 'La Mosca Lola',
            email: 'lamosca@lola.com',
            password: '123123123'
        })

        const game = new Game({
            name: 'Super Mario Bros',
            description: 'Platform Game, jump, hit and be a superstar!',
            budget: 23,
            owner: user.id // user._id.toString()
        })

        return Promise.all([user.save(), game.save()])
    })
    .catch(console.error)
    .then(() => mongoose.disconnect())
    .then(() => console.log('ended'))