const { validateId } = require('./helpers/validations')
const { NotFoundError } = require('martachisfit-errors')
const { models: { User } } = require('martachisfit-data')

/**
 * Retrieves a user by its id
 * 
 * @param {string} userId 
 * 
 * @returns {Promise}
 */
module.exports = function (userId) {
    validateId(userId)

    return User.findById(userId).lean()
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            const { _id } = user

            user.id = _id.toString()

            delete user._id
            delete user.password

            return user
        })
}