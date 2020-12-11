const { validateEmail, validatePassword } = require('./helpers/validations')
const { AuthError } = require('geogin-errors')
const { models: { User } } = require('geogin-data')
const bcrypt = require('bcryptjs')

 /**
 * Authenticate a user.
 * 
 * @param {String} email 
 * @param {String} password
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