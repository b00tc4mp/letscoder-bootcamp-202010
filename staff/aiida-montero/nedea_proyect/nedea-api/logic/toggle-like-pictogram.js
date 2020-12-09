const { validateId } = require('./helpers/validations')
const { ObjectId } = require('mongodb')
const { NotFoundError } = require('../errors')
const {User} = require('../models')

module.exports = (userId, likeId) =>   {
    validateId(userId)
    validateId(likeId)

    return User
        .findById(userId)
        .then(user => {
            debugger
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            const { likes = [] } = user

            const index = likes.findIndex(like => like.toString() === likeId)

            index < 0 ? likes.push(new ObjectId(likeId)) : likes.splice(index, 1)


            return User.updateOne({_id : ObjectId(userId)}, { $set: { likes } }) 
        })
        .then(() => {})
}