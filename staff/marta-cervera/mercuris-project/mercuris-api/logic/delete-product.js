const { validateId } = require('./helpers/validations')
const { NotFoundError, ConflictError } = require('../errors')
const { models: { Product, User },mongoose: { Types: { ObjectId } } } = require('mercuris-data')


/**
 * Retrieves a product by its id
 * 
 * @param {string} productId 
 * 
 * @returns {Promise}
 */
module.exports = function (ownerId, productId) {
    validateId(ownerId)
    validateId(productId)

    return User
        .findById(ownerId).lean()
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${ownerId} not found`)

            return Product
                .findById(productId)
        })
        .then(product => {
            if (!product) throw new NotFoundError(`product with id ${productId} not found`)
            if(product.owner.toString() !== ownerId) throw new ConflictError (`product with id ${productid} does not belong to user with id ${ownerId}`)

            return Product
                .deleteOne({ _id: ObjectId(productId)})
        })
        .then(() => { })
}