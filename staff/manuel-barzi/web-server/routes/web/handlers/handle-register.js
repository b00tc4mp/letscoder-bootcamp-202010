const fs = require('fs')
const path = require('path')
const { registerUser } = require('../../../logic')

module.exports = (req, res, handleError) => {
    const { body: { fullname, email, password } } = req

    registerUser(fullname, email, password, error => {
        if (error) return handleError(error)

        fs.readFile(path.join(__dirname, '../../../views/register-confirm.html'), 'utf8', (error, content) => {
            if (error) return handleError(error)

            res.send(content)
        })
    })
}