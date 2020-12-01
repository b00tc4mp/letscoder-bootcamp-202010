const { Schema } = require('mongoose')

module.exports = new Schema({
    name: {    
        type: String,
        required: true
    },

    role: {
        type: String,
        enum: ['person', 'company'],
        default: 'company',
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
        minlength: 6
    },

    contact : {
        type: String,
        // required: true
    },

    geo: [Number]
})