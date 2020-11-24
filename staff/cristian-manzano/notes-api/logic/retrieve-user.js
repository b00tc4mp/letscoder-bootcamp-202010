const { validateId, validateCallback } = require('./helpers/validations')
const context = require('./context')
//const { ObjectID } = require('mongodb')
const { ObjectId } = require('mongodb')

const { env: { DB_NAME } } = process

module.exports = function (userId, callback) {
    validateId(userId)
    validateCallback(callback)

    const { connection } = this

    const db = connection.db(DB_NAME)

    const users = db.collection('users')

    //const _id = new ObjectID(userId)
    //const _id = ObjectID(userId)
    //const _id = new ObjectId(userId)
    const _id = ObjectId(userId)

    users.findOne({ _id }, (error, user) => {
        if (error) return callback(error)

        if (!user) return callback(new Error(`user with id ${userId} not found`))

        const { _id, fullname, email } = user

        user = { id: _id.toString(), fullname, email } // sanitise  

        callback(null, user)
    })
}.bind(context) 