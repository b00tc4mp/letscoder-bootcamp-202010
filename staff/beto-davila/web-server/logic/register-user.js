const fs = require('fs')
const path = require('path')
const { validateFullname, validateEmail, validatePassword, validateCallback } = require('./helpers/validations') 
const { createId } = require('../utils/ids')

module.exports = (fullname, email, password, callback) => {

    // previous syncronous validations
    validateFullname(fullname)
    validateEmail(email)
    validatePassword(password)
    validateCallback(callback)

    fs.readdir('./data/users', (error, files) => {

        (function check(files, index = 0) {
            if (index < files.length){  
                const file = files[index]

                fs.readFile(path.join(__dirname, `./data/users/${file}`), 'utf8', (error, json) => {
                    if(error) return console.error(error)

                    const { email: _email } = JSON.parse(json) // 'json' destructuring to get only the email and rename it to avoid shadowing

                    if(email === _email) callback(new Error(`Sorry, the email: ${email} was registered before`))
                    else check(files, ++index) // keep checking files while the previous condition is false

                })

            } else { // on finishing checking all the files (check function) and not finding the email, the user will be able to register.
                
                const id = createId()
                const user = { id, fullname, email, password}
                const json = JSON.stringify(user)
                
                fs.writeFile(path.join(__dirname, `./data/users/${id}.json`), json, error => {
                    if (error) return callback(new Error(error.message))

                    callback(null)
                })
            }
        })(files);
    })
} 

// module.exports = registerUser