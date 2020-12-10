const { Schema, ObjectId } = require('mongoose')

module.exports = new Schema({
    name: {
        type: String,
        required: true
    },
    owner: {
        type: ObjectId,
        required: true,
        ref: 'User'
    }
})