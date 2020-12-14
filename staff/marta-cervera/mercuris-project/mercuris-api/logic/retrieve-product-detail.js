const { validateId } = require('./helpers/validations')
const { NotFoundError } = require('../errors')
const { models: { Product, User } } = require('mercuris-data')

module.exports = function (productId) {
    validateId(productId)

    return Product.findById(productId).lean()
        .then(product => {

            if (!product) throw new NotFoundError(`product with id ${productId} not found`)
            const { owner } = product

            return User

                .findById(owner.toString())
                .then(user => {

                    const { _id } = product

                    const { name } = user

                    user.fullname = name

                    product.id = _id.toString()

                    delete product._id

                    delete user.name


                    return { ...product, ...user }

                })

        })
}