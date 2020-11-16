const fs = require ('fs')
const path = require ('path')
const registerUser = require('../../logic/register-user')

module.exports = (req, res) => {
    const {body: {fullname, email, password }} = req

    registerUser(fullname, email, password, error => {
      if(error)
       return fs.readFile(path.join(__dirname, '../../views/error.html'), 'utf8', (_error, content) => {
           if(_error) return res.send(`sorry, there was an error : ( ERROR: ${_error.message}`)

           res.send(content.replace('{message}', error.message))
       })

       fs.readFile(path.join(__dirname, '../../views/register-confirm.html'), 'utf8', (error, content) => {
           if (error) return res.send(`sorry, there was an error : ( ERROR: ${error.message}`)

        res.send(content)
       })

    })
}