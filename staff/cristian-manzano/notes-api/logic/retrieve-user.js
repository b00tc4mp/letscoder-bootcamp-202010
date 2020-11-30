const { validateId } = require('./helpers/validations')
const { User } = require('../models')
const { NotFoundError } = require('../errors')


module.exports = function (userId) {
// debugger
    validateId(userId)

// debugger
    return User
        .findById(userId)
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            user.id = _id.toString()

            const { _id } = user


            delete user._id
            delete user.password

            return user
        })
}