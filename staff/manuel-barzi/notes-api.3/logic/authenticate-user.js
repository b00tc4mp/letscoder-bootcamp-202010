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

    users.findOne({ email, password }, (error, user) => {
        if (error) return callback(error)
        
        if (!user) return callback(new Error('wrong credentials'))

        const { _id } = user

        callback(null, _id.toString())
    })
}.bind(context)