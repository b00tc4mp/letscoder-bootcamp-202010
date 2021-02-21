const { validateEmail, validatePassword, validateFullname } = require('./helpers/validations')
const semaphore = require('./helpers/semaphore')
const { models: { User } }  = require('gameloop-data')
const bcryptjs = require('bcryptjs')
const { ConflictError } = require('gameloop-errors')

/**
 * Registers a new user to the user's API
 * 
 * @param {string} fullname user's fullname
 * @param {string} email user's e-mail
 * @param {string} password user's password
 * 
 * @returns {undefined} onsuccessful registration
 * 
 * @throws {ConflictError} on server error or user registered already
 */

module.exports = function (fullname, email, password) {
    validateFullname(fullname)
    validateEmail(email)
    validatePassword(password)
    
    return semaphore(() => 
    User 
        .findOne({ email })
        .then(user => {
            if(user) throw new ConflictError(`user with e-mail ${email} is already registered`)

            return bcryptjs.hash(password, 10)
        })
        .then(hash => User.create({ fullname, email, password: hash }))
        .then(() => {})
    )
}