const fs = require('fs')
const { validateEmail, validatePassword, validateCallback, validateFullname } = require('./helpers/validations')
const { createId } = require('../utils/ids')


module.exports = (email, password, fullname, callback) => {
    validateEmail(email)
    validatePassword(password)
    validateFullname(fullname)
    validateCallback(callback)

    fs.readdir('./data/users', (error, files) => {
        if (error) return callback(error);

        (function check(files, index = 0) {
            if (index < files.length) {
                const file = files[index]

                fs.readFile(`./data/users/${file}`, 'utf8', (error, json) => {
                    if (error) return console.error(error)

                    const { email: _email } = JSON.parse(json)

                    if (email === _email) callback(new Error('email already exists'))
                    else check(files, ++index)
                })
//al iterar todo el rato y ver que no existe usuario con esas credenciales se procedera con el registro de usuario

            } else {

                let id = createId()
                let fullname = fullname
                let email = email
                let password = password

                const user = { id, fullname, email, password }

                const json = JSON.stringify(user)

                file = `./data/users/${id})`.json

                fs.writeFile(file, json, (error) => {
                    if (error) callback(error)
                    else callback(null, id)
                })


            }

        })(files)
    })
}