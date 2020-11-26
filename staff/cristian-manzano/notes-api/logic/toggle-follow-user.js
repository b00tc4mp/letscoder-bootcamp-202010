const { validateId } = require('./helpers/validations')
const context = require('./context')
const { ObjectId } = require('mongodb')
const { NotFoundError } = require('../errors')

const { env: { DB_NAME } } = process

module.exports = function (userId, followingId) {
    validateId(userId)
    validateId(followingId)

    const { connection } = context

    const db = connection.db(DB_NAME)

    const users = db.collection('users')

    const _id = ObjectId(userId)

    return users.findOne({ _id })
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            const { following = [] } = user

            const indew = followings.findIndex(following => following.toString() === followingId)

            index < 0 ? followings.push(new ObjectId(followingId)) : followings.splice(index, 1)

            return users.updateOne({ _id }, { $set: { followings }})
        })
        .then(() => {})
    }