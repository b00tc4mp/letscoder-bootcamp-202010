const { validateEmail, validatePassword, validateFullname } = require('./helpers/validations')
const semaphore = require('./helpers/semaphore')
const context = require('./context')
const { ConflictError } = require('../errors')

const { env: { DB_NAME } } = process

// regular function to bind the context
module.exports = function (fullname, email, password) {
    validateFullname(fullname)
    validateEmail(email)
    validatePassword(password)

    const { connection } = this
    
    const db = connection.db(DB_NAME)

    const users = db.collection('users')

    return semaphore(() => {
        users
            .findOne({ email })
            .then(user => {
                if (user) throw new ConflictError(`the email ${email} was registered already`)

                user = { fullname, email, password }

                return users.insertOne(user)
            })
            .then(() => undefined )
    })
}.bind(context)