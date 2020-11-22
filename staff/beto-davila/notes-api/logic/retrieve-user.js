const { validateId, validateCallback } = require('./helpers/validations')
// const fs = require('fs')
// const path = require('path')
const context = require('./context')
const { ObjectID } = require('mongodb')

const { env: { DB_NAME } } = process

module.exports = function (token, callback) {
    validateId(token)
    validateCallback(callback)

    const { connection } = this

    const db = connection.db(DB_NAME)

    const users = db.collection('users')

    const _id = ObjectID.createFromHexString(token)

    users.findOne({_id} ,(error, user) => {
        if(error) return callback(error)

        
        return callback(null, user)
    })
}.bind(context)