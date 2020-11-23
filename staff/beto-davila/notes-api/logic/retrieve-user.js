const { validateId, validateCallback } = require('./helpers/validations')
// const fs = require('fs')
// const path = require('path')
const context = require('./context')
// const { ObjectID } = require('mongodb')
const { ObjectId } = require('mongodb')

const { env: { DB_NAME } } = process

module.exports = function (userId, callback) {
    validateId(userId)
    validateCallback(callback)

    const { connection } = this

    const db = connection.db(DB_NAME)

    const users = db.collection('users')

    const _id = ObjectId.createFromHexString(userId)

    users.findOne({_id} ,(error, user) => {
        if(error) return callback(error)

        if (!user) return callback(new Error(`The user with id ${userId} was not found`))
        
        const { _id, fullname, email} = user

        user = { userId: _id, fullname, email}

        return callback(null, user)
    })
}.bind(context)