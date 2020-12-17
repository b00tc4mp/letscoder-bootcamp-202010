const { validateId } = require('./helpers/validations')

const { models: { User }, mongoose: { Types: { ObjectId } } } = require('gameloop-data')


module.exports = function (userId, fullname, contact, phone, city) {
    const _id = ObjectId(userId)
   
    console.log(_id, fullname, contact, phone, city)
    return User
        .updateOne({ _id }, { $set: { fullname, contact, phone, city } })
        .then(result => result)
}