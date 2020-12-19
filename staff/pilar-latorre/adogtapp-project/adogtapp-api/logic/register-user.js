const { validateUserName, validateEmail, validatePassword, validateAddress, validateCity, validatePhone, validateDescription } = require('./helpers/validations')
const semaphore = require('./helpers/semaphore')
const { ConflictError } = require('../errors')
const { models: { User } } =require('adogtapp-data')
const bcryptjs = require('bcryptjs')

/**
 * Registers a new user to the user's API
 * 
 * @param {string} userName user's fullname
 * @param {string} email user's e-mail
 * @param {string} password user's password
 * @param {string} address user's address
 * @param {string} city user's city
 * @param {string} phone user's phone
 * @param {string} description user's description
 * 
 * @returns {undefined} onsuccessful registration
 * 
 * @throws {ConflictError} on server error or user registered already
 */

module.exports = function (userName, email, password, address, city, phone, description) {
    validateUserName(userName)
    validateEmail(email)
    validatePassword(password)
    validateAddress(address)
    validateCity(city)
    validatePhone(phone)
    validateDescription(description)

    return semaphore(() =>
        User
            .findOne({ email })
            .then(userName => {
                if (userName) throw new ConflictError(`shelter with e-mail ${email} already registered`)

                return bcryptjs.hash(password, 10)
            })
            .then(hash => User.create({ userName, email, password: hash, address, city, phone, description }))
            .then(() => { })
    )
}