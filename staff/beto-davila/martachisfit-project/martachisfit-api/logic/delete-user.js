const { validateId } = require('./helpers/validations')
const { NotFoundError } = require('martachisfit-errors')
const { models: { User } } = require('martachisfit-data')

/**
 * Deletes the registered user
 * 
 * @param {string} userId the unique id of the registered user
 * 
 * @returns {Promise} returns an empty promise on success
 */

module.exports = function (userId) {
    validateId(userId)

    return User.findByIdAndRemove(userId).lean()
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)
            return {}
        })
}