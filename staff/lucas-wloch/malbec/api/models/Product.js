const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
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
        type: boolean,
        required: [true, 'Please add a glutenFree value'],
    },
    vegan: {
        type: boolean,
        required: [true, 'Please add a vegan value'],
    },
    available: {
        type: boolean,
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

module.exports = mongoose.models.Product || mongoose.model('Product', productSchema)