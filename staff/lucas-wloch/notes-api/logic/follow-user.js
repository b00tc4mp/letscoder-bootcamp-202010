const { validateId } = require('./helpers/validations')
const ObjectId = require('mongodb').ObjectId;
const { NotFoundError } = require('../errors')
const { User } = require('../models')




module.exports = (userId, followId) => {
    validateId(userId)
    validateId(followId)

    //users.findById(ObjectId)
    return User
        .findById(userId)
        .then(user => {
            if (user) {
                const { follows = [] } = user
                const index = follows.findIndex(objId => objId.toString() === followId)

                if (index > -1) follows.splice(index, 1)
                else follows.push(new ObjectId(followId))

                return User
                    .updateOne({ _id: userId }, { $set: { follows } })
                    .then(result => undefined)

            } else throw new NotFoundError(`user with id ${userId} is not found`)

        })

}