const { validateEmail, validatePassword, validateFullname } = require('./helpers/validations')
const semaphore = require('./helpers/semaphore')
const { ConflictError } = require('geogin-errors')
const { models: { User } } = require('geogin-data')
const bcrypt = require('bcryptjs')

/**
 * Register a user.
 * 
 * @param {String} fullname 
 * @param {String} email 
 * @param {String} password 
 * 
 * @throws {TypeError} - if is not a fullname (string)
 * @throws {ContentError} - if fullname is empty or blank
 * 
 * @throws {TypeError} - if is not an e-mail (string)
 * @throws {ContentError} - if e-mail is empty or blank
 * @throws {FormatError} - if invalid e-mail (regex)
 * 
 * @throws {TypeError} - if password is not a password (string)
 * @throws {ContentError} - if password is empty or blank
 * 
 * @returns {String} - id. 
 */
module.exports = function (fullname, email, password) {
    validateFullname(fullname)
    validateEmail(email)
    validatePassword(password)

    return semaphore(() =>
        User
            .findOne({ email })
            .then(user => {
                if (user) throw new ConflictError(`user with e-mail ${email} already registered`)
                return bcrypt.hash(password, 10)
            })
            .then(hash => User.create({ fullname, email, password: hash }))
            .then(() => { })
    )
}