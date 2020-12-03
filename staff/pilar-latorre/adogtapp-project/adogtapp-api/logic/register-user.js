const { validateUserName, validateEmail, validatePassword, validateAddress, validateCity, validatePhone } = require('./helpers/validations')
const semaphore = require('./helpers/semaphore')
const { ConflictError } = require('../errors')
const { User } = require('../models')
const bcryptjs = require('bcryptjs')

module.exports = function (userName, email, password, address, city, phone, description) {
    validateUserName(userName)
    validateEmail(email)
    validatePassword(password)
    validateAddress(address)
    validateCity(city)
    validatePhone(phone)

    return semaphore(() =>
        User
            .findOne({ email })
            .then(userName => {
                if (userName) throw new ConflictError(`shelter with e-mail ${email} already registered`)

                return bcryptjs.hash(password, 10)
            })
            .then(hash => User.create({ userName, email, password: hash, address, city, phone, description }))
            .then(() => { })
    )
}