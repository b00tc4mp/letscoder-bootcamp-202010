// const fs = require('fs')
// const path = require('path')
const { validateEmail, validatePassword, validateCallback } = require('./helpers/validations')
const context = require('./context')

const { env: { DB_NAME } } = process

module.exports = function (email, password, callback) {
    validateEmail(email)
    validatePassword(password)
    validateCallback(callback)

    const { connection } = this

    const db = connection.db(DB_NAME)

    const users = db.collection('users')

    users.findOne({email, password} ,(error, user) => {
        if(error) return callback(error)

        if (user) {
            const { _id } = user

            const token = _id.toHexString()

            return callback(null, token)

        } else return callback(new Error('wrong credentials'))
    })
}.bind(context)