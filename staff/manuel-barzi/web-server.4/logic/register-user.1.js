const fs = require('fs')
const { validateEmail, validatePassword, validateCallback, validateFullname } = require('./helpers/validations')
const { createId } = require('../utils/ids')
const path = require('path')

// WARN this solution fails on concurrent registers!

module.exports = (fullname, email, password, callback) => {
    validateFullname(fullname)
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
                    if (error) return console.error(error)

                    const { email: _email } = JSON.parse(json)

                    if (email === _email) callback(new Error(`e-mail ${email} already registered`))
                    else check(files, ++index)
                })
            } else {
                const id = createId()

                const user = { id, fullname, email, password }

                const json = JSON.stringify(user)

                fs.writeFile(path.join(usersPath, `${id}.json`), json, error => {
                    if (error) return callback(error)

                    callback(null)
                })
            }
        })(files)
    })
}