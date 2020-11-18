const fs = require('fs')
const { validateEmail, validatePassword, validateCallback, validateFullname } = require('./helpers/validations')
const { createId } = require('../utils/ids')
const path = require('path')
const semaphore = require('./helpers/semaphore')

module.exports = (fullname, email, password, callback) => {
    validateFullname(fullname)
    validateEmail(email)
    validatePassword(password)
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

                    fs.readFile(path.join(usersPath, file), 'utf8', (error, json) => {
                        if (error) {
                            done()

                            return callback(error)
                        }

                        const { email: _email } = JSON.parse(json)

                        if (email === _email) {
                            done()

                            callback(new Error(`e-mail ${email} already registered`))
                        } else check(files, ++index)
                    })
                } else {
                    const id = createId()

                    const user = { id, fullname, email, password }

                    const json = JSON.stringify(user)

                    fs.writeFile(path.join(usersPath, `${id}.json`), json, error => {
                        if (error) {
                            done()

                            return callback(error)
                        }

                        done()

                        callback(null)
                    })
                }
            })(files)
        })
    })
}