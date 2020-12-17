const { models: { Menu } } = require('malbec-data')



module.exports = () => {
    const options = [
        { path: 'postres', model: 'Product' }
    ]
    
    // return Menu.findOne().lean()
    return Menu.findOne().lean().populate(options)
}

// const options = [
//     { path: 'entrantes.parrilla entrantes.empanadas entrantes.ensaladas', model: 'Product' },
//     { path: 'principales.parrilla principales.pescados principales.otrasSugerencias', model: 'Product' },
//     { path: 'bebidas.aguasRefrescos bebidas.vinos bebidas.cervezas bebidas.tragos', model: 'Product' },
//     { path: 'postres', model: 'Product' }
// ]