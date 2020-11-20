const fs = require('fs')
const path = require('path')

module.exports = (query, callback) => {
    // TODO search users by query matching any part of the fullname or the e-mail

    //validateQuery(query)
    validateCallback(callback)

    const usersPath = path.join(__dirname, `../data/users/${id}.json`)
    let user;

    fs.readdir(usersPath, (error, files) => {
        if (error) return callback(error);
        
        if (files) {
            (function check(files, index = 0) {
                if (index < files.length) {
                    const file = files[index]
    
                    fs.readFile(path.join(usersPath, file), 'utf8', (error, json) => {
                        if (error) return callback(error)
                        
                        var match = json.match(query)

                        if (match) {
                             const result = match.input

                             user = JSON.parse(result)
                        }

                        else check(files, ++index)
                    })
                } else return callback(user)
            })(files)
        } else return callback (new Error(''))

    })
}