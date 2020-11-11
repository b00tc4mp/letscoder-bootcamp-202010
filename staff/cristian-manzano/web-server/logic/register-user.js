const fs = require('fs')
const { validateFullname, validateEmail, validatePassword, validateCallback } = require('./helpers/validations') 
const { createId } = require('../utils/ids')
const path = require('path')
const semaphore = require('./helpers/semaphore')

module.exports = (fullname, email, password, callback) => {

    validateFullname(fullname)
    validateEmail(email)
    validatePassword(password)
    validateRepassword(password)
    validateCallback(callback)

    const usersPath = path.join(__dirname, '../data/users')

    semaphore(done => {
        fs.readdir(usersPath, (error, files) => {
            if (error) {
                done()

                return callback(error)
            };

            (function check(files, index = 0) {
                if (index < files.length) {
                    const file = files[index]

                    fs.readFile(path.join(usersPath, file), 'utf8')
                }
            }
        })
    })

    try {
        const files = fs.readdirSync(usersPath);

        (function check(files, index = 0) {
            if (index < files.length) {
                const file = files[index]

                try {
                    const json = fs.readFileSync(path.join(usersPath, file), 'utf8')

                    const { email: _email } = JSON.parse(json)

                    if (email === _email)
                        callback(new Error(`e-mail ${email} already registered`))

                    else 
                        check(files, ++index)
                } catch (error) {
                    return callback(error)
                }
            } else {
                const id = createId()

                const user = { id, fullname, email, password }

                const json = JSON.stringify(user)

                try {
                    fs.writeFile(path.join(usersPath, `${id}.json`), json)
                } catch(error) {
                    return callback(error)
                }
                callback(null)
            }
        })(files)
    } catch (error) {
        callback(error)
    }
}
