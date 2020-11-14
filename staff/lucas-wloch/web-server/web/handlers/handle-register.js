const path = require('path')
const fs = require('fs')
const { registerUser } = require('../../logic')


module.exports = (req, res) => {

    const {body: { fullname, email, password, repassword } } = req

    registerUser(fullname, email, password, repassword, (error, id) => {
        if (error)
            return fs.readFile(path.join(__dirname, '../../views/error.html'), 'utf8', (_error, content) => {
                if (_error) return res.send(`sorry, there was an error :( ERROR: ${_error.message}`)

                res.send(content.replace('{message}', error.message))
                
            })
        return fs.readFile(path.join(__dirname, '../../views/register-confirm.html'), 'utf8', (error, content) => {
            if (error) return res.send(`sorry, there was an error :( ERROR: ${error.message}`)

            res.send(content)
        })
    })


}