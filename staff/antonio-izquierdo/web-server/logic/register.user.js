const fs = require('fs')
const {  validateFullName, validateEmail, validatePassword, validateCallback, validateRepeatedPasword } = require('./helpers/validations')

module.exports = (fullname, email, password, repassword, callback) => {
    validateFullName(fullname)
    validateEmail(email)
    validatePassword(password)
    validateRepeatedPasword(repassword)
    validateCallback(callback)

    fs.readdir('./data/users', (error, files) => {
        if(error) return callback(error);

        (function check(files, index = 0) {
            if (index < files.length) {
                const file = files[index]

                fs.readFile(`./data/users/${file}`, 'utf8', (error, json) => {
                    if (error) return console.error(error)

                    const {id, email: _email, password : _password, repassword: _password} = JSON.parse(json)

                    if(email === _email && password === _password && repassword === _password) callback(null,id)
                    else check(files, ++index)
                })
            }else callback (new Error('existing user, please select another user'))
        })(files)
    })
} 