const { validateId } = require('./helpers/validations')
const { NotFoundError } = require('offers-errors')
const { User } = require('../models')

module.exports = function (userId) {
    validateId(userId)

    return User.findById(userId).lean()
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)
            console.log(user)
            const { _id } = user

            user.id = _id.toString()
            
            delete user._id
            delete user.password

            return user
        })
}