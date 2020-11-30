const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema

module.exports = new Schema({
    owner: {
        type: ObjectId,
        required: true
    },

    text: {
        type: String,
        required: true
    },

    tags: [{
        type: String
    }],

    visibility: {
        type: String,
        enum: ['public', 'private'],
        default: 'private',
        required: true
    },

    date: {
        type: Date,
        default: Date.now
    }
})