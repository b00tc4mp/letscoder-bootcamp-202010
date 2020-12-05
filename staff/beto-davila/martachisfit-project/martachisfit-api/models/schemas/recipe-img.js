const { Schema, ObjectId } = require('mongoose')

module.exports = new Schema({
    img: {
        data: Buffer,
        ContentType: String
    },
    title: {
        type: String,
        required: true
    },

    recipeId: {
        type: [ ObjectId ]
    }
})