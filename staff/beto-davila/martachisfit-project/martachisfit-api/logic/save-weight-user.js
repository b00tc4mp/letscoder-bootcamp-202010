const { validateId, validateNumber } = require('./helpers/validations')
const { NotFoundError } = require('martachisfit-errors')
const { models: { User } } = require('martachisfit-data')

/**
 *  Saves and updates the user's historic weight
 * 
 * @param {string} userId user's id
 * @param {number} weight the user's current weight
 * 
 * @returns {Promise} returns an empty promise on successful update
 */

module.exports = (userId, weight) => {
    validateId(userId)
    validateNumber(weight)

    return User.findById(userId)
        .then(user => {

            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            const newWeight = { weight: weight, modifiedAt: new Date().toLocaleDateString('en-GB') }

            user.weightHistory.push(newWeight)

            // if newWeight has the same date than the previous one, remove that previous newWeight

            return user.save()

        })
        .then(() => { })

}
