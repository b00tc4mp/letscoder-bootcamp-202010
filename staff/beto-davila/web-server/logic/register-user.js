// synchronous register version
const fs = require('fs')
const path = require('path')
const { validateFullname, validateEmail, validatePassword, validateCallback } = require('./helpers/validations') 
const { createId } = require('../utils/ids')

module.exports = (fullname, email, password, callback) => {
    // previous synchronous validations
    validateFullname(fullname)
    validateEmail(email)
    validatePassword(password)
    validateCallback(callback)

    try {
        const files = fs.readdirSync(path.join(__dirname, '../data/users'));
            
            (function check(files, index = 0) {
                if (index < files.length){  
                    const file = files[index]
                    try {
                        const json = fs.readFileSync(path.join(__dirname, `../data/users/${file}`), 'utf8')
                            
                        const { email: _email } = JSON.parse(json) // 'json' destructuring to get only the email and rename it to avoid shadowing
                            
                        if(email === _email) 
                            callback(new Error(`Sorry, the email: ${email} was registered before`))
                        else 
                            check(files, ++index) // keep checking files while the previous condition is false
                        
                    } catch (error) {
                        return callback(error)
                    }
                    
                } else { // on finishing checking all the files (check function) and not finding the email, the user will be able to register.
                    const id = createId()
                    const user = { id, fullname, email, password}
                    const json = JSON.stringify(user)
                    try {
                        fs.writeFileSync(path.join(__dirname, `../data/users/${id}.json`), json)
                    } catch (error) {
                        return callback(error);
                    }
                         callback(null)
                }
            })(files);
    } catch (error) {
           callback(error)             
    }
} 

// module.exports = registerUser