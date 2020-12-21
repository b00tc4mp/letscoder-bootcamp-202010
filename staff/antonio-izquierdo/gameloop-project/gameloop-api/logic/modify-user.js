const { validateId, validateFullname, validateContact, validatePhone, validateCity } = require('./helpers/validations')

const { models: { User }, mongoose: { Types: { ObjectId } } } = require('gameloop-data')


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