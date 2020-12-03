const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema

module.exports = new Schema({
   

    name: {
        type: String,
        required: true
    },

    breed: {
        type: String,
        required: true
    },

    color: {
        type: String
        
    },

    description: {
        type: String,
        
    },

    shelter: {
        type: ObjectId,
        ref: 'User',
        required: true
    }

    
})