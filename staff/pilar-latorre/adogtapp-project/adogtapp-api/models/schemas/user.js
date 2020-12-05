const { Schema } = require('mongoose')

module.exports = new Schema({
    userName: {
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
    },

    address: {
        type: String
    },

    city: {
        type: String,
        require: true
    },

    phone: {
        type: String,
        required: true
    },

    description: {
        type: String
    },

    role: {
        type: String,
        enum: ['person', 'shelter'],
        default: 'shelter',
        required: true
      },
    
    geo: {
        Number
    }


})