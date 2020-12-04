const { validateName, validateEmail, validatePassword, validateCity, validateArtistName, validateDescription, validateLastName } = require('./helpers/validations')
const semaphore = require('./helpers/semaphore')
const { ConflictError } = require('../errors')
const { User } = require('../models')

module.exports = function (email, artistName, password) {
    debugger
    validateEmail(email)
    validateArtistName(artistName)
    validatePassword(password)

    return semaphore(() =>
        User
            .findOne({ email })
            .then(user => {
                if (user) throw new ConflictError(`user with e-mail ${email} already registered`)
                

                return User.create({ email, artistName, password })
            })
            .then(() => {})
    )
}