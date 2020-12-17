const { validateId, validateNumber } = require('./helpers/validations')
const { NotFoundError } = require('../errors')
const { models: { User } } = require('martachisfit-data')

module.exports = (userId, weight) => {
    validateId(userId)
    validateNumber(weight)

    return User.findById(userId)
        .then(user => {

            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            user.weightHistory.push(weight)

            return user.save().then(user => user.weightHistory)

        })

}
