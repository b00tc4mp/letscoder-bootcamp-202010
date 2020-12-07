const { validateId, validateData, validateFullname, validateEmail, validatePassword, validateImage, validateScore, validateFavorites } = require('./helpers/validations')
const { NotFoundError, ValueError } = require('geogin-errors')
const { User } = require('../models')

/**
 * Updates user.
 * 
 * @param {string} id the user's unique id
 * @param {Object} data with values to be made
 * 
 * @returns {Promise<undefined>} 
 * 
 * @throws {TypeError} - if id is not an id (string)
 * @throws {ContentError} - if id is empty or blank
 * @throws {LengthError} - if id length is not 24
 * @throws {TypeError} - if id is not a valid id
 * 
 * @throws {TypeError} - if data is not a data (object)
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
 * @throws {TypeError} - if image is not a image (string)
 * 
 * @throws {TypeError} - if score is not a score (string)
 * 
 * @throws {TypeError} - if favorites is not a favorites (Array)
 * 
 */

module.exports = (id, data) => {
    validateId(id)
    validateData(data)

    const { fullname, email, password, image, score, favorites } = data

    if (fullname !== undefined) {
        validateFullname(fullname)
    }

    if (email !== undefined) {
        validateEmail(email)
    }

    if (password !== undefined) {
        validatePassword(password)
    }

    if (image !== undefined) {
        validateImage(image)
    }

    if (score !== undefined) {
        validateScore(score)
    }

    if (favorites !== undefined) {
        validateFavorites(favorites)
    }
   
    const AVAILABLE_KEYS = ['fullname', 'email', 'password', 'image', 'score', 'favorites']
    const keys = Object.keys(data)

    for (const key of keys)
        if (!AVAILABLE_KEYS.includes(key)) throw new ValueError(`property ${key} is not allowed`)

    return User.findById(id)
    .then(user => {
        if (!user) throw new NotFoundError(`user with id ${userId} not found`)
        return User.findByIdAndUpdate(
            id,
            data,
          );
    })
    .then(() => { })
}