const { validateId, validateFullname, validateContact, validatePhone, validateCity } = require('./helpers/validations')

const { models: { User }, mongoose: { Types: { ObjectId } } } = require('gameloop-data')

/**
 * Modify user credentials on the user's API
 * 
 * @param {string} userId user's Id
 * @param {string} fullname user's fullname
 * @param {string} contact user's contact
 * @param {string} phone user's phone
 * @param {string} city user's city
 * 
 * @returns {string} token
 */


module.exports = function (userId, fullname, contact, phone, city) {
    validateId(userId)
    validateFullname(fullname)
    validateContact(contact)
    validatePhone(phone)
    validateCity(city)

    const _id = ObjectId(userId)
   
    return User
        .updateOne({ _id }, { $set: { fullname, contact, phone, city } })
        .then(result => result)
}