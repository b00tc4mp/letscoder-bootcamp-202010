const { validateId } = require('./helpers/validations')
const { NotFoundError } = require('../errors')
const { models: { Product } } =require('mercuris-data')


/**
 * Retrieves a product by its id
 * 
 * @param {string} productId 
 * 
 * @returns {Promise}
 */
module.exports = function (productId) {
    validateId(productId)

    return Product.findByIdAndRemove(productId).lean()
        .then(product => {
            if (!product) throw new NotFoundError(`product with id ${productId} not found`)


            return {}
        })
}