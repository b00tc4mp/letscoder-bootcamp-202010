const fs = require('fs')
const { validateFullname, validateEmail, validatePassword, validateRepassword, validateCallback } = require('./helpers/validations')
const { createId } = require('../utils/ids')
const path = require('path')

module.exports = (fullname, email, password, repassword, callback) => {
    try {
      validateFullname(fullname)
    validateEmail(email)
    validatePassword(password)
    validateRepassword(password, repassword)
    validateCallback(callback)  
    }catch(error){
        callback(error)
    }
    

    const usersPath = path.join(__dirname, '../data/users/')

    try {

        const files = fs.readdirSync(usersPath);
            (function check(files, index = 0) {
                if (index < files.length) {
                    const file = files[index]

                    try {
                        const json = fs.readFileSync(path.join(usersPath, file), 'utf8')
                        

                        const { email: _email, password: _password, fullname: _fullname } = JSON.parse(json)

                        if (email === _email && password === _password && fullname === _fullname) callback(new Error('user already exists'))
                        else check(files, ++index)
                    } catch (error) {
                        return callback(error)
                    }
                } else {
                    const id = createId()
                    const user = { id, fullname, email, password }
                    const json = JSON.stringify(user);

                    const _path = `${id}.json`

                    try {
                        fs.writeFileSync(path.join(usersPath, _path), json)

                        callback(null, id)
                        
                    } catch (error) {
                        return callback(error)
                    }

                }
            })(files);
    } catch (error) {
        console.log(error)

    }

}