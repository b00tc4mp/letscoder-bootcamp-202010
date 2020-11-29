
const { validateQuery, validateId } = require('./helpers/validations')

const ObjectId = require('mongodb').ObjectId;
const { NotFoundError } = require('../errors')
const { User } = require('../models')



// añadir que se nesecite token para buscar users
module.exports = (userId, query) => {
    validateId(userId)
    validateQuery(query)

    const _id = ObjectId(userId)


    return User
        .findOne({ _id: userId }).lean()
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            // const users = User.find({ $or: [{ fullname: new RegExp(query, 'i') }, { email: new RegExp(query, 'i') }] }).lean()
            // const users = User.find().lean()
            return User.find({ $or: [{ fullname: new RegExp(query, 'i') }, { email: new RegExp(query, 'i') }] }).lean()
                .then(users => {
                    if (users && users.length) {
                        users.forEach(user => {
                            const { _id } = user
                            user.id = _id.toString()

                            delete user._id
                            delete user.password
                        })

                        return users
                    } else return []
                })
            // let results = []
            // if (users) {
            //     users.forEach(user => {
            //         const { _id } = user
            //         user.id = _id

            //         delete user._id
            //         delete user.password
            //         results.push(user)
            //     })

            //     // return users
            //     return users
            // } else return users

        })

}
// User.find({ $or: [{ fullname: new RegExp(query, 'i') }, { email: new RegExp(query, 'i') }] }).lean()
//                 .then(users => {
//                     if (users && users.length) {
//                         users.forEach(user => {
//                             const { _id } = user
//                             user.id = _id.toString()

//                             delete user._id
//                             delete user.password
//                         })

//                         return users
//                     } else return []
//                 })

        // const users = User.find({ $or: [{ fullname: new RegExp(query, 'i') }, { email: new RegExp(query, 'i') }] }).lean()
        // if (users && users.length) {
        //     users.forEach(user => {
        //         const { _id } = user
        //         user.id = _id.toString()

        //         delete user._id
        //         delete user.password
        //     })

        //     return users
        // } else return []


        // users.forEach(user => {
            //     const { _id } = user
        //     user.id = _id.toString()

        //     delete user._id
        //     delete user.password
        // }
        // users = users.map(({ _id, fullname }) => ({ id: _id.toString(), fullname }))