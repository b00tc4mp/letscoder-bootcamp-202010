const { validateId, validateCity,validateName, validateContact } = require('./helpers/validations')

const { models: { User }, mongoose: { Types: { ObjectId } } } = require('mercuris-data')


module.exports = function (userId, name, contact, address, city, phone) {
    if (typeof queryCompany !== 'undefined')validateId(userId)
    if (typeof name !== 'undefined')validateName(name)
    if (typeof contact!== 'undefined')validateContact(contact)
    if (typeof city !== 'undefined')validateCity(city)
    


    const _id = ObjectId(userId)
   
    return User
        .updateOne({ _id }, { $set: { name, contact, address, city, phone } })
        .then(result => result)
}