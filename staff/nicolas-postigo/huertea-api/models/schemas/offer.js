const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema

module.exports = new Schema({
/*     owner: {
        type: ObjectId,
        required: true
    }, */

    offername: {
        type: String,
        required: true
    },

/*     tags: [{
        type: String
    }], */


    //TODO PONER LOCALIZACIÓN
})