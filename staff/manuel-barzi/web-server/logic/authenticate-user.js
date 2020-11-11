const fs = require('fs')
const { validateEmail, validatePassword, validateCallback } = require('./helpers/validations')
const path = require('path')

module.exports = (email, password, callback) => {
    validateEmail(email)
    validatePassword(password)
    validateCallback(callback)

    const usersPath = path.join(__dirname, '../data/users')

    fs.readdir(usersPath, (error, files) => {
        if (error) return callback(error);

        (function check(files, index = 0) {
            if (index < files.length) {
                const file = files[index]

                fs.readFile(path.join(usersPath, file), 'utf8', (error, json) => {
                    if (error) return callback(error)

                    const { id, email: _email, password: _password } = JSON.parse(json)

                    if (email === _email && password === _password) callback(null, id)
                    else check(files, ++index)
                })
            } else callback(new Error('wrong credentials'))
        })(files)
    })
}