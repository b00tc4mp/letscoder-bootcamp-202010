require('dotenv').config()

const { env: { MONGODB_URL } } = process

const mongoose = require('mongoose')

const { Schema, model } = mongoose

const userSchema = new Schema({
    fullname: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: email => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email),
            message: props => `${props.value} is not a valid e-mail`
        }
    },

    password: {
        type: String,
        required: true,
        minlength: 8
    }
})

const User = model('User', userSchema)

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        //const user = new User({ fullname: 'Manuel Barzi', email: 'manuelbarzi@gmail.com', password: '123123123' })
        const user = new User({ fullname: 'Pepito Grillo', email: 'pepigri@gmail.com', password: '123123123' })

        return user.save()
    })
    .then(() => {
        return User.findOne({ email: 'pepigri@gmail.com' })
    })
    .then(user => {
        user.password = '321321321'

        return user.save()
    })
    .then(user => {
        user.fullname = 'Pepi Gri'

        return user.save()
    })
    .then(() => User.find({}))
    .then(users => {
        console.log(users)

        const [user] = users

        //return User.deleteOne({ _id: user._id })
        //return User.deleteOne({ _id: user._id.toString() })
        return User.deleteOne({ _id: user.id })
    })
    .catch(console.error)
    .then(() => mongoose.disconnect())
    .then(() => console.log('ended'))