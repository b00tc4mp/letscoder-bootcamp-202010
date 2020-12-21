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
 * @throws {AuthError} - on wrong credentials
 * @throws {AuthError} - password does not match with hash
 *
 * @returns {String} - id and handle token
 */

module.exports = (email, password) => {
    validateEmail(email)
    validatePassword(password)

    return (async () => {
        const user = await User.findOne({ email }).lean()

        if (!user) throw new AuthError('wrong credentials')

        const { password: hash } = user

        const match = await bcrypt.compare(password, hash)

        if (!match) throw new AuthError('wrong credentials')

        const { _id } = user
        
        return _id.toString()
    })()
}