const { validateEmail, validatePassword, validateFullname } = require('./helpers/validations')
// const { ConflictError } = require('../errors')
const { User } = require('../models')
const bcryptjs = require('bcryptjs')

module.exports = function (fullname, email, password) {
    validateFullname(fullname)
    validateEmail(email)
    validatePassword(password)

     return User
            .findOne({ email })
            .then(user => {
                if (user) throw new Error(`user with e-mail ${email} already registered`)

                return bcryptjs.hash(password, 10)
            })
            .then(hash => User.create({ fullname, email, password: hash }))
            .then(() => {})
}