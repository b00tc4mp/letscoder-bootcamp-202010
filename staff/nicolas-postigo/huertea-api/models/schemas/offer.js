const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema

module.exports = new Schema({
    owner: {
        type: ObjectId,
        required: true
    }, 

    titleoffer: {
        type: String,
        required: true
    },
    
    offername: {
        type: String,
        unique: true
    },

    image: {
        type: String,
        required: 'URL can\'t be empty',
        required: true
    },


    //TODO PONER LOCALIZACIÓN
})