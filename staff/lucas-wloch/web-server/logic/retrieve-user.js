const fs = require('fs')
const path = require('path')
const {validateId, validateCallback} = require('./helpers/validations')

module.exports = (id, callback) => {
    validateId(id)
    validateCallback(callback)

    const file = path.join(__dirname, `../data/users/${id}.json`)

    fs.access(file, fs.F_OK, error => {
        if (error) return callback(new Error(`user with id ${id} not found`))
        
        fs.readFile(file, 'utf8', (error, json) => {
            if (error) return callback(error)
    
            const user = JSON.parse(json)
    
            delete user.password
    
            callback(null,user)
        })
    })

}