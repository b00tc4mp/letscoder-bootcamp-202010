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

    fullname: {
        type: String,
        required: true
    },

    // email: {
    //     type: String,
    //     required: true
    // },

    password: {
        type: String,
        required: true,
        minlength: 8
    },

    role: {
        type: String,
        required: true,
        enum: ['ARTIST', 'PROMOTER'],
        default: 'ARTIST'
    },

    artistName: {
        type: String,
        required: false
    },

    city: {
        type: String,
        required: false
    },

    tags: {
        type: String,
        required: false
    },

    youtubeLink: {
        type: String,
        required: false
    },

    bandcampLink: {
        type: String,
        required: false
    },

    spotifyLink: {
        type: String,
        required: false
    },

    description: {
        type: String,
        required: false
    },
    
})