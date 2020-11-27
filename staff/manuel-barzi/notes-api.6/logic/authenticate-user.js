const { validateEmail, validatePassword } = require('./helpers/validations')
const { AuthError } = require('../errors')
const { User } = require('../models')

module.exports = function (email, password) {
    validateEmail(email)
    validatePassword(password)

    return User.findOne({ email, password }).lean()
        .then(user => {
            if (!user) throw new AuthError('wrong credentials')

            const { _id } = user

            return _id.toString()
        })
}