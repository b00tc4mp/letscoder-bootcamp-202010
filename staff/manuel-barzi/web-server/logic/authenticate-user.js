const fs = require('fs')

//const authenticateUser = (email, password, callback) => {
module.exports = (email, password, callback) => {
    // TODO validate all arguments

    fs.readdir('./data/users', (error, files) => {
        if (error) return callback(error);

        (function check(files, index = 0) {
            if (index < files.length) {
                const file = files[index]

                fs.readFile(`./data/users/${file}`, 'utf8', (error, json) => {
                    if (error) return console.error(error)

                    const { id, email: _email, password: _password } = JSON.parse(json)

                    if (email === _email && password === _password) callback(null, id)
                    else check(files, ++index)
                })
            } else callback(new Error('wrong credentials'))
        })(files)
    })
}

//module.exports = authenticateUser