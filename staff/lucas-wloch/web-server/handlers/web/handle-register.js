const path = require('path')
const fs = require('fs')
const { registerUser } = require('../../logic')


module.exports = (req, res, handleError) => {

    const {body: { fullname, email, password, repassword } } = req

    registerUser(fullname, email, password, repassword, (error, id) => {
        if (error)
            return fs.readFile(path.join(__dirname, '../../views/register.html'), 'utf8', (_error, content) => {
                if (_error) return handleError(_error)

                res.send(content.replace('{feedback}', error.message))
                
            })
        return fs.readFile(path.join(__dirname, '../../views/register-confirm.html'), 'utf8', (error, content) => {
            if (error) return handleError(error)

            res.send(content)
        })
    })


}