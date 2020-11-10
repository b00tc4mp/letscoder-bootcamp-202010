const fs = require('fs')

const { validateFullname, validateEmail, validatePassword, validateRepassword, validateCallback } = require('./helpers/validations') 

module.exports = (id, fullname, email, password, repassword, callback) => {

    validateFullname(fullname)
    validateEmail(email)
    validatePassword(password)
    validateRepassword(password, repassword)
    validateCallback(callback)


    const user = {id, fullname, email, password}

    const json = JSON.stringify(user);

    fs.readdir('./data/users', (error, files) => {
       
        (function check(files, index = 0) {
            if (index < files.length){  
                const file = files[index]

                fs.readFile(`./data/users/${file}`,'utf8',(error, json) => {
                    if(error) return console.error(error)

                    const { email: _email, password: _password } =JSON.parse(json)

                    if(email === _email && password === _password) callback(new Error('user already exists'))
                    else check(files, ++index)

                })

            }else {
                fs.writeFile(`./data/users/${id}.json`,  json, error => {
                    if (error) return callback(new Error(error.message))
            
                    callback(null)
            
                })
            }
        })(files);
    })

}