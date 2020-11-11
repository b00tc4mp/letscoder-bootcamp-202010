const fs = require('fs')
const { validateEmail, validatePassword, validateCallback } = require('./helpers/validations')
const path = require ('path')

//const authenticateUser = (email, password, callback) => {
module.exports = (email, password, callback) => {
    // previous synchronous validations
    validateEmail(email)
    validatePassword(password)
    validateCallback(callback)


    // __dirname '/Users/betodav/Bootcamp/collab/letscoder-bootcamp-202010/staff/beto-davila/web-server'
    // __filename is the whole directory path of the file currently executing (not used on this script)

    // const usersPath = path.join(__dirname, '../data/users')

    // Read the provided directory. Returns 'files' array if no error.
    fs.readdir(path.join(__dirname, '../data/users'), (error, files) => {
        if (error) return callback(error);
        
        // Recursive function using 'selfie'. We pass through all the files in the directory to check if the condition is true to pass the id to the callback
        (function check(files, index = 0) {
            if (index < files.length) { 
                const file = files[index] // the next file to read
                
                // Returns json file from ./data/users if successful
                fs.readFile(path.join(__dirname, `../data/users/${file}`), 'utf8', (error, json) => {
                    if (error) return callback(error)
                    // destructuring the json variable to get what we need. Credentials we input have to match with the ones registered in the json file.
                    // In destructuring we rename email and password (_email, _password) to avoid shadowing with the params we pass first
                    const { id, email: _email, password: _password } = JSON.parse(json)

                    if (email === _email && password === _password) callback(null, id)
                    else check(files, ++index)
                })
            } else callback(new Error('wrong credentials')) // when we are done checking all the files and got no success with the input credentials
        })(files) // Passing 'files' argument to the 'selfie'. Since there's no defined index here, will be 0 by default as we set.
    })
}

//module.exports = authenticateUser