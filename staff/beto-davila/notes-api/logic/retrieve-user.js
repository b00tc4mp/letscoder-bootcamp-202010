// const fs = require('fs')
// const path = require('path')
// const { ObjectID } = require('mongodb')
const { validateId } = require('./helpers/validations')
const { ObjectId } = require('mongodb')
const context = require('./context')
const { NotFoundError } = require('../errors')

const { env: { DB_NAME } } = process

module.exports = function (userId) {
    validateId(userId)

    const { connection } = this

    const db = connection.db(DB_NAME)

    const users = db.collection('users')

    const _id = ObjectId.createFromHexString(userId)

    return users
        .findOne({_id})
        .then( user => {

                if (!user) throw new NotFoundError(`The user with id ${userId} was not found`)
                    
                const { _id, fullname, email} = user

                user = { userId: _id, fullname, email}

                return user
                })
}.bind(context)