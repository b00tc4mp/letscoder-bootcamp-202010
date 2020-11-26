const { validateId, validateCallback } = require('./helpers/validations')
const { ObjectId } = require('mongodb')
const context = require('./context')
const { NotFoundError } = require('../errors')

const { env: { DB_NAME } } = process

module.exports = function (userId, followingId, callback) {
    validateId(userId)
    validateId(followingId)
    validateCallback(callback)

    const { connection } = this

    const db = connection.db(DB_NAME)

    const users = db.collection('users')

    const _id = ObjectId.createFromHexString(userId)

    users.findOne({_id} ,(error, user) => {
        if(error) return callback(error)

        if (!user) return callback(new NotFoundError(`User with id ${userId} not found`))
        
        const { _id } = user

        let { followings } = user

        // followings = []  reinitialize array each time

        user = { userId: _id, followings }

        // look for followees before adding. If it exists remove it, otherwise add it to 'followings' array (toggle)
        if (followings.length) {
            // Store index position
            const index = followings.findIndex(following => following.toString() === followingId)

            // if < 0, does not exist in array, add it, else, remove it with splice method
            index < 0? followings.push(ObjectId.createFromHexString(followingId)) : followings.splice(index, 1)

            users.updateOne({ _id }, { $set: { followings } }, (error, result) => {
                if (error) return callback(error)

                callback(null)
            })

            return callback(null)

        } else {
            // add new followee to empty array
            followings.push(ObjectId.createFromHexString(followingId))

            users.updateOne({ _id }, { $set: { followings } }, (error, result) => {
                if (error) return callback(error)
    
                callback(null)
            })
        }
    })

}.bind(context)