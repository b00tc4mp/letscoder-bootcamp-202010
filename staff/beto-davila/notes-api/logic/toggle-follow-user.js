const { validateId } = require('./helpers/validations')
const { ObjectId } = require('mongodb')
const { NotFoundError } = require('../errors')
const { User } = require('../models')
 
module.exports = (userId, followingId) => {
    validateId(userId)
    validateId(followingId)

    const _id = ObjectId.createFromHexString(userId)

    return User.findOne({_id}).then(user => {

        if (!user) throw new NotFoundError(`User with id ${userId} not found`)
        
        const { _id } = user

        let { followings } = user

        // followings = []  reinitialize array each time

        user = { userId: _id, followings: [] }

        // look for followees before adding. If it exists remove it, otherwise add it to 'followings' array (toggle)
        if (followings.length) {
            // Store index position
            const index = followings.findIndex(following => following.toString() === followingId)

            // if < 0, does not exist in array, add it, else, remove it with splice method
            index < 0? followings.push(ObjectId.createFromHexString(followingId)) : followings.splice(index, 1)

            return User.update({ _id }, { $set: { followings } })
                .then(result => {})
                .then(() => {})
             

        } else {
            // add new followee to empty array
            followings.push(ObjectId.createFromHexString(followingId))

            return User.update({ _id }, { $set: { followings } })
                .then(result => {})
        }
    })

}