const { validateEmail, validatePassword } = require('./helpers/validations')
const { AuthError } = require('../errors')
const { User } = require('../models')
const bcryptjs = require('bcryptjs')

module.exports = function (email, password) {
    validateEmail(email)
    validatePassword(password)

    return User.findOne({ email }).lean()
        .then(user => {
            if (!user) throw new AuthError('wrong credentials')

            const { password: hash } = user

            return bcryptjs.compare(password, hash)
                .then(match => {
                    if (!match) throw new AuthError('wrong credentials')

                    const { _id } = user

                    return _id.toString()
                })
        })
}