const { validateId } = require('./helpers/validations')
const { NotFoundError } = require('../errors')
const {  Product } = require('../models')

module.exports = function(productId) {
    validateId(productId)

    return Product.findById(productId).lean()
    .then(product => {
        if (!product) throw new NotFoundError(`product with id ${productId} not found`)

        const { _id } = product

        product.id = _id.toString()
        
        delete product._id
     

        return product
    })
}