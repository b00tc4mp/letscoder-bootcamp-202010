const { validateEmail, validatePassword, validateFullname, validateRole } = require('./helpers/validations')
const semaphore = require('./helpers/semaphore')
const { ConflictError } = require('../errors')
const { User } = require('../models')

module.exports = function (fullname, email, password, role) {
    validateFullname(fullname)
    validateEmail(email)
    validatePassword(password)
    validateRole(role)

    return semaphore(() =>
        User
            .findOne({ email })
            .then(user => {
                if (user) throw new ConflictError(`user with e-mail ${email} already exists`)
                

                return User
                .create({ email, fullname, password, role })
            })
            .then(() => {})
            
    )
}