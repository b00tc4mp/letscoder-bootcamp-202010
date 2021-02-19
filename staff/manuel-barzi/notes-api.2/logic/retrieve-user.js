const { validateId, validateCallback } = require('./helpers/validations')
const fs = require('fs')
const path = require('path')

module.exports = (userId, callback) => {
    validateId(userId)
    validateCallback(callback)

    const filePath = path.join(__dirname, `../data/users/${userId}.json`)

    fs.access(filePath, fs.F_OK, error => {
        if (error) return callback(new Error(`user with id ${userId} not found`))

        fs.readFile(filePath, 'utf8', (error, json) => {
            if (error) return callback(error)

            const user = JSON.parse(json)

            delete user.password

            callback(null, user)
        })
    })
}