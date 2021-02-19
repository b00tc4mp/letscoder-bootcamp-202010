const { validateEmail, validatePassword } = require('./helpers/validations')
const { AuthError } = require('notes-errors')
const { models: { User } } = require('notes-data')
const bcrypt = require('bcryptjs')

module.exports = function (email, password) {
    validateEmail(email)
    validatePassword(password)

    return User.findOne({ email }).lean()
        .then(user => {
            if (!user) throw new AuthError('wrong credentials')

            const { password: hash } = user

            return bcrypt.compare(password, hash)
                .then(match => {
                    if (!match) throw new AuthError('wrong credentials')

                    const { _id } = user

                    return _id.toString()
                })
        })
}