const { validateId } = require('./helpers/validations')
const { NotFoundError } = require('geogin-errors')
const { models: { User } } = require('geogin-data')

/**
 * Retrieve user
 * 
 * @param {string} id user id
 * 
 * @throws {NotFoundError} if user id dos not exist
 * 
 * @return {object} user object
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
