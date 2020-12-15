const { Schema, model } = require('mongoose')
const product = require('./schemas/product')

const productSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
    },
    description: {
        type: String,
        required: [true, 'Please add a description'],
    },
    price: {
        type: String,
        // required: [true, 'Please add a price'],
    },
    glutenFree: {
        type: Boolean,
        required: [true, 'Please add a glutenFree value'],
    },
    vegan: {
        type: Boolean,
        required: [true, 'Please add a vegan value'],
    },
    available: {
        type: Boolean,
        default: true,
        required: [true, 'Please add a available value']
    },
    alergenos: [{
        type: String
    }],
    category: {
        type: String,
        enum: ['entrantes-parrilla', 'empanadas', 'ensaladas', 'parrilla', 'pescados', 'otras-sugerencias',
        'acompañamientos-guarniciones', 'postres', 'aguas-refrescos', 'vinos', 'cervezas' ],
        required: true
    },
    img: {
        type: String
    }
})

module.exports = model('Product', product)