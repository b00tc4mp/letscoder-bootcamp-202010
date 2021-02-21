const { validateId, validateDescription,validatePrice, validateName } = require('./helpers/validations')
const { models: {Product, User }, mongoose: {Types:{ ObjectId}} } = require('mercuris-data')
const { NotFoundError, ConflictError } = require('../errors')


module.exports = function (ownerId, productId, name, description, price) {
    validateId(ownerId)
    if (typeof productId !== 'undefined') validateId(productId)
    validateName(name)
    validateDescription(description)
    validatePrice(price)

    const _id = ObjectId(ownerId)

    return User
        .findById({ _id })
        .then(user => {
            if (!user) throw NotFoundError(`user with ${ownerId} not found`)

            if (productId) {

                const _id = ObjectId(productId)

                return Product
                    .findOne({ _id })
                    .then(product => {
                        if (!product) throw NotFoundError(`product with id ${productId} not found`)
                        if(product.owner.toString() !== ownerId) throw new ConflictError (`product with id ${productId} does not belong to user with id ${ownerId}`)
                        
                        return Product
                            .updateOne({ _id }, { $set: { name, description, price } })
                            .then(() => productId)
                    })
            } else
                return Product
                    .create({ owner: ObjectId(ownerId), name, description, price })
                    .then(result => result.id)

        })
    }