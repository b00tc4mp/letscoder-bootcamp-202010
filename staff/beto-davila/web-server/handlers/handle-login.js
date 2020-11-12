const fs = require('fs')
const path = require('path')
const authenticateUser = require('../logic/authenticate-user')
//const session = require('./session')

module.exports = (req, res) => {

    // req destructuring to get email and password from 'body' that we got from the urlencodedBodyParser. Pass arguments to auth
    const { body: { email, password }} = req

    // auth logic: check if user exists in files (read them one at a time, and try to match user and password, otherwise login error)
    authenticateUser(email, password, (error, userId) => {
        if (error)
            return fs.readFile(path.join(__dirname, '../views/error.html'), 'utf8', (_error, content) => {
                if (_error) return res.send(`sorry, there was an error :( ERROR: ${_error.message}`)
                
                // return error html content on wrong auth
                res.send(content.replace('{message}', error.message))
            })

        //session.userId = userId

        /* setting header to match the user id in 'session-id' and the expiration to be 1hour from now */
        res.setHeader('set-cookie', `session-id=${userId}; expires=${new Date(Date.now() + 60 * 60 * 1000).toUTCString()}`)
            debugger
        res.redirect('/')
    })
}