const { Schema } = require('mongoose')

module.exports = new Schema({
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
            message: props => `${props.email} is not a valid email`
        }
    },

    password: {
        type: String,
        required: true,
        minlength: 3
    },

    followings: {
        type: Array
    }
})