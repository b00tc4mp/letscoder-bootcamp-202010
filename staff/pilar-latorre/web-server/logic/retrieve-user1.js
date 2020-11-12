const fs = require('fs')
const path = require('path')

const {validateCallback, validateId} = require('./helpers/validations') 

module.exports = (id, callback) => {

    validateCallback(callback)
    validateId(id)

    let file = path.join(__dirname,`../data/users/${id}.json`)

    fs.readFile(file, 'utf8', (error, json) => { 
        if (error) return callback(new Error('id does not match with any user'))

        const user = JSON.parse(json)

        delete user.password
        
        callback(null, user)
    }) 
}