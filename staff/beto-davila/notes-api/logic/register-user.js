const { validateEmail, validatePassword, validateFullname } = require('./helpers/validations')
const semaphore = require('./helpers/semaphore')
// const context = require('./context')
const { ConflictError } = require('../errors')
const { User } = require('../models')
const bcryptjs = require('bcryptjs')

module.exports = function (fullname, email, password) {
    validateFullname(fullname)
    validateEmail(email)
    validatePassword(password)

    // const { connection } = this
    
    // const db = connection.db(DB_NAME)

    // const users = db.collection('users')

    return semaphore(() => 
        User
            .findOne({ email })
            .then(user => {
                if (user) throw new ConflictError(`the email ${email} was registered already`)

                return bcryptjs.hash(password, 10)
            })
            .then(hash => User.create({ fullname, email, password: hash }))
            .then(() => undefined )
    )
}