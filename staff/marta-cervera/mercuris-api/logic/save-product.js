const { validateId, validateDescription,validatePrice } = require('./helpers/validations')
const { Product, User } = require('../models')
const { NotFoundError } = require('../errors')
const { ObjectId } = require('mongodb')
const { validateName } = require('../../mercuris-app/src/logic/helpers/validations')



module.exports = function (productId, ownerId, name, description, price) {
    debugger
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

                        return Product
                            .updateOne({ _id }, { $set: { name, description, price } })
                            .then(result => result.id)
                    })
            } else
                return Product
                    .create({ owner: ObjectId(ownerId), name, description, price })
                    .then(result => result.id)

        })
    }