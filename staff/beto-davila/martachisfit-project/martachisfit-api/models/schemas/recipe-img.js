const { Schema } = require('mongoose')

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
        type: String
    },

    urlPath: {
        type: String
    }
})