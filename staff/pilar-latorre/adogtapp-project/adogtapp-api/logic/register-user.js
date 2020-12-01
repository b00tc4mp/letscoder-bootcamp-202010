const { validateShelterName, validateEmail, validatePassword, validateAddress, validateCity, validatePhone } = require('./helpers/validations')
const semaphore = require('./helpers/semaphore')
const { ConflictError } = require('../errors')
const { Shelter } = require('../models')
const bcryptjs = require('bcryptjs')

module.exports = function (shelterName, email, password, address, city, phone) {
    validateShelterName(shelterName)
    validateEmail(email)
    validatePassword(password)
    validateAddress(address)
    validateCity(city)
    validatePhone(phone)

    return semaphore(() =>
        Shelter
            .findOne({ email })
            .then(shelterName => {
                if (shelterName) throw new ConflictError(`shelter with e-mail ${email} already registered`)

                return bcryptjs.hash(password, 10)
            })
            .then(hash => Shelter.create({ shelterName, email, password: hash, address, city, phone }))
            .then(() => { })
    )
}