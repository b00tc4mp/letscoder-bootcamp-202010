const { validateId, validateCallback } = require('./helpers/validations')
const { ObjectId } = require('mongodb')
const context = require('./context')

const { env: { DB_NAME } } = process

module.exports = function (userId, followingId, callback) {
    validateId(userId)
    validateId(followingId)
    validateCallback(callback)
    /* 
    // TODO retrieve user by id
    
    const index = followings.findIndex(following => following.toString() === followingId)
    index < 0? followings.push(new ObjectId(followingId)) : followings.splice(index, 1)
    
    // TODO update user in db with new followings
    */

    const { connection } = this

    const db = connection.db(DB_NAME)

    const users = db.collection('users')

    const _id = ObjectId.createFromHexString(userId)

    users.findOne({_id} ,(error, user) => {
        if(error) return callback(error)

        if (!user) return callback(new Error(`User with id ${userId} not found`))
        
        const { _id } = user

        let { followings } = user

        // followings = [] --> reinitialize array each time

        user = { userId: _id, followings }

        if (followings.length) {

        // look for followees before adding. If it exists remove it, otherwise add it to 'followings' array (toggle)

        // Store index position
        const index = followings.findIndex(following => following.toString() === followingId)

        // const _id = ObjectId.createFromHexString(followingId)
        // if < 0, does not exist in array, add it, else, remove it with splice method
        index < 0? followings.push(followingId) : followings.splice(index, 1)

        users.updateOne({ _id }, { $set: { followings } }, (error, result) => {
            if (error) return callback(error)

            callback(null)
        })

        return callback(null)

        } else {
            // add new followee to empty array
            // const _id = ObjectId.createFromHexString(followingId)

            followings.push(followingId)

            users.updateOne({ _id }, { $set: { followings } }, (error, result) => {
                if (error) return callback(error)
    
                callback(null)
            })
        }
    })

}.bind(context)