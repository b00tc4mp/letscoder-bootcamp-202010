const { validateEmail, validatePassword } = require('./helpers/validations')
const { AuthError } = require('martachisfit-errors')
const { models: { User } } = require('martachisfit-data')
const bcryptjs = require('bcryptjs')

/**
 * Checks user credentials on the user's API
 * 
 * @param {string} email user's e-mail
 * @param {string} password user's password
 * 
 * @returns {string} token
 * 
 * @throws {AuthError} on wrong credentials
 * @throws {AuthError} password does not match with hash
 */

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