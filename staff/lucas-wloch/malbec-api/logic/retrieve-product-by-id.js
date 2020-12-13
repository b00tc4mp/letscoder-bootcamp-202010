const { NotFoundError } = require('../errors')
const { Product } = require('../models')
const { validateId } = require('./helpers/validations')


module.exports = (productId) => {
    validateId(productId)

    return Promise.resolve()
        .then(() => {
            debugger

            return Product.findById(productId).lean()
                .then(product => {
                    if (!product)
                        throw new NotFoundError(`product with id ${productId} not found`)

                    const { _id } = product

                    product.id = _id.toString()

                    delete product._id

                    return product
                })
        })

}

