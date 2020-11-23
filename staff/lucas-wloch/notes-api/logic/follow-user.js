const { validateId, validateCallback } = require('./helpers/validations')

const context = require('./context')
const { env: { DB_NAME } } = process
const ObjectId = require('mongodb').ObjectId;


module.exports = (userId, followId, callback) => {
    validateId(userId)
    validateId(followId)
    validateCallback(callback)
    const { connection } = context

    const db = connection.db(DB_NAME)

    const users = db.collection('users')

    let _id = new ObjectId(userId)
    //users.findById(ObjectId)
    users.findOne({ _id }, (error, user) => {
        if (error) {

            return callback(error)
        }

        if (user) {
            const { follows = [] } = user


            /////////////////////7
            const _followId = ObjectId(followId) // esto no

            const index = follows.indexOf(_followId)
            debugger
            if (index > -1) follows.splice(index, 1)
            else follows.push(_followId)

            // const index = followings.findIndex( object => object.toString() === followId)

            // index < 0 ? followings.push(new ObjectId(followId)) : followings.splic(index,1)

            // updateOne(user)


            users.updateOne({ _id }, { $set: { follows } }, (error, result) => {
                if (error) return callback(error)
                callback(null)
            })

        } else return callback(new Error(`user with id ${userId} is not found`))

    })

}
