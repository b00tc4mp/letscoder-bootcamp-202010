const { validateId } = require('./helpers/validations')
const { NotFoundError } = require('../errors')
const { models: { User } } = require('mercuris-data')
const { User } = require('mercuris-data/models')

module.exports = function( userId) {


return User.findByIdAndUpdate(userId).lean()
    .then(user => {
        if (!user) throw new NotFoundError(`user with ${userId} not found`)

        return user
    })
}