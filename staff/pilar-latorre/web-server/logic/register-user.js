const fs = require('fs')
const { validateEmail, validatePassword, validateCallback, validateFullname, validateRepassword } = require('./helpers/validations')
const { createId } = require('../utils/ids')
const path = require('path')

module.exports = (fullname, email, password, repassword, callback) => {
    validateFullname(fullname)
    validateEmail(email)
    validatePassword(password)
    validateCallback(callback)
    validateRepassword(password, repassword)

    const usersPath = path.join(__dirname, '../data/users')

    try {
        const files = fs.readdirSync(usersPath);

        (function check(files, index = 0) {
            if (index < files.length) {
                const file = files[index]

                try {
                    const json = fs.readFileSync(path.join(usersPath, file), 'utf8')

                    const { email: _email } = JSON.parse(json)

                    if (email === _email){

                    
                        callback(new Error(`e-mail ${email} already registered`))
                    }else
                        check(files, ++index)

                        
                } catch (error) {
                    return callback(error)
                }
            } else {
                const id = createId()

                const user = { id, fullname, email, password }

                const json = JSON.stringify(user)

                try {
                    debugger
                    fs.writeFileSync(path.join(usersPath, `${id}.json`), json)
                    
                } catch(error) {
                    return callback(error)
                }

                callback(null, id)
            }
        })(files)
        
    } catch (error) {
        callback(error)
    }
}