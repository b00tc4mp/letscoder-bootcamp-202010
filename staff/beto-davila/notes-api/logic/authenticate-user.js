// const fs = require('fs')
// const path = require('path')
const { validateEmail, validatePassword } = require('./helpers/validations')
const { AuthError } = require('../errors')
const context = require('./context')

const { env: { DB_NAME } } = process

module.exports = function (email, password) {
    validateEmail(email)
    validatePassword(password)

    const { connection } = this

    const db = connection.db(DB_NAME)

    const users = db.collection('users')

    return users
        .findOne({email, password}) 
                .then(user => {

                if (user) {
                    const { _id } = user

                    const userId = _id.toHexString()

                    return userId

                } else throw new AuthError('wrong credentials')
            })
}.bind(context)