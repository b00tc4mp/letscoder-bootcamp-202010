const fs = require('fs')
const { validateEmail, validatePassword, validateCallback } = require('./helpers/validations')

module.exports = (email, password, callback) => {
    validateEmail(email)
    validatePassword(password)
    validateCallback(callback)

    // TODO
}