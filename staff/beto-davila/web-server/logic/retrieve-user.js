const fs = require('fs')
const { validateCallback, validateId } = require('./helpers/validations')
const path = require('path')

//const retrieveUser = (id, callback) => {
module.exports = (id, callback) => {
    // sync validations
    validateId(id)
    validateCallback(callback)

    // Read the provided directory. Return 'files' array if no error.
    fs.readdir(path.join(__dirname, '../data/users'), (error, files) => {
        if (error) return callback(error);
        
        (function check(files, index = 0) {
            if (index < files.length) { 
                const file = files[index] // the current file to read in the next step
                
                // Returns json file from ./data/users if successful
                fs.readFile(path.join(__dirname, `../data/users/${id}.json`), 'utf8', (error, json) => {
                    if (error) return console.error(error)
                    // destructuring the json variable to get what we need.
                    const { id: _id } = JSON.parse(json)

                    if (id === _id) {
                        json = JSON.parse(json)
                        callback(null, json)
                    }
                    else 
                        check(files, ++index)
                })
            } else callback(new Error(`the id: ${id} was not found`)) // when we are done checking all the files and got no success
        })(files) // Passing 'files' argument to the 'selfie'. Since there's no defined index here, will be 0 by default.
    })
}