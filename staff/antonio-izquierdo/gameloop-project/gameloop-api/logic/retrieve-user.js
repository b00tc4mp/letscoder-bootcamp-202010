const { validateId } = require('./helpers/validations')
const { NotFoundError } = require('../errors')
const { models: { User } }  = require('gameloop-data')

module.exports = function (userId) {
    if (typeof userId !== 'undefined')validateId(userId)

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