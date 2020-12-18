const { validateId, validateNumber } = require('./helpers/validations')
const { NotFoundError } = require('../errors')
const { models: { User } } = require('martachisfit-data')

/**
 *  Saves and updates the user's historic weight
 * 
 * @param {string} userId user's fullname
 * @param {number} weight the user's weight
 * 
 * @returns {Promise} returns a promise with the user info
 */

module.exports = (userId, weight) => {
    validateId(userId)
    validateNumber(weight)

    return User.findById(userId)
        .then(user => {

            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            user.weightHistory.push(weight)

            return user.save().then(user => user)

        })

}
