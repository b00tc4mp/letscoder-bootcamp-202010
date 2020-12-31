const { validateEmail, validatePassword, validateFullname, validateNumber } = require('./helpers/validations')
const { ConflictError } = require('martachisfit-errors')
const { models: { User } } = require('martachisfit-data')
const bcryptjs = require('bcryptjs')

/**
 * Registers a new user to the user's API
 * 
 * @param {string} fullname user's fullname
 * @param {string} email user's unique e-mail
 * @param {string} password user's password
 * 
 * @returns {undefined} onsuccessful registration
 * 
 * @throws {ConflictError} on server error or user registered already
 */

module.exports = function (fullname, email, password, calories) {
    validateFullname(fullname)
    validateEmail(email)
    validatePassword(password)
    validateNumber(calories)

    return User
        .findOne({ email })
        .then(user => {
            if (user) throw new ConflictError(`user with e-mail ${email} already registered`)

            return bcryptjs.hash(password, 10)
        })
        .then(hash => User.create({ fullname, email, password: hash, calories }))
        .then(() => { })
}