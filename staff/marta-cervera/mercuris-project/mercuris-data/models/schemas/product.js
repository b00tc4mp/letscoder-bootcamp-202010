const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema

module.exports = new Schema({
    owner: {
       type: ObjectId,
       required: true 
    },

    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true,
        
    },

    price: {
        type: Number,
        required: true

    },


})
