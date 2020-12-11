const { Schema } = require('mongoose')

module.exports = new Schema({
    text: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },

    urlPathImg: {
        type: String,
    }

})