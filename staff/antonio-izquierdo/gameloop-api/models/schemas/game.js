const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema

module.exports = new Schema({

    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    budget: {
        type: Number,
        required: true
    },

    owner: {
        type: ObjectId,
        required: true
    },

    gameconsole: {
        type: String,
        enum: ['nintendo', 'play station', 'game boy'],
        default: 'nintendo',
        required: true
    }
})