const { validateId } = require('./helpers/validations')

const { models: { User }, mongoose: { Types: { ObjectId } } } = require('mercuris-data')


module.exports = function (userId, name, contact, address, city, phone) {
    const _id = ObjectId(userId)
   
    console.log(userId, name, address, city,phone)
    return User
        .updateOne({ _id }, { $set: { name, contact, address, city, phone } })
        .then(result => result)
}