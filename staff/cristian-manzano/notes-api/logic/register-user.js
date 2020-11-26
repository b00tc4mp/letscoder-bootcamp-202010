const { validateEmail, validatePassword, validateFullname } = require('./helpers/validations')
const semaphore = require('./helpers/semaphore')
const { ConflictError } = require('../errors')
const { User } = require('../models')

module.exports = function (fullname, email, password) {
    validateFullname(fullname)
    validateEmail(email)
    validatePassword(password)

    return semaphore(() =>
        User
            .findOne({ email })
            .then(user => {
                if (user) throw new ConflictError(`user with e-mail ${email} already registered`)
                
                // user = new User({ fullname, email, password })
                // return user.save()

                //user = { fullname, email, password }
                //return new User(user).save()
                //return User.create(user)

                return User.create({ fullname, email, password })
            })
            .then(() => {})
    )
}