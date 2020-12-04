const { Schema } = require('mongoose')

module.exports = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: email => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email),
            message: props => `${props.value} is not a valid e-mail`
        }
    },

    name: {
        type: String,
        required: false
    },

    lastName: {
        type: String,
        required: false
    },

    artistName: {
        type: String,
        required: true
    },


    password: {
        type: String,
        required: true,
        minlength: 8
    },

    city: {
        type: String,
        required: false
    },

    description: {
        type: String,
        required: false
    },
})