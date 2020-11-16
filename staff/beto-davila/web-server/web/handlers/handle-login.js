const fs = require('fs')
const path = require('path')
const authenticateUser = require('../../logic/authenticate-user')
const sessions = require('../../sessions')

module.exports = (req, res) => {

    // 'req' destructuring to get email, password and sessionId from the respective middlewares
    const { body: { email, password }, cookies: { 'session-id': sessionId }} = req

    // auth logic: check if user exists in db (read the files one at a time, and try to match user and password, otherwise login error)
    authenticateUser(email, password, (error, userId) => {
        if (error)
            return fs.readFile(path.join(__dirname, '../../views/error.html'), 'utf8', (_error, content) => {
                if (_error) return res.send(`sorry, there was an error :( ERROR: ${_error.message}`)
                
                // return error content on wrong auth. The replace method will show the error '{message}' within the html content
                res.send(content.replace('{message}', error.message))
            })

        const session = sessions[sessionId]

        session.userId = userId
        

        /* setting header to match the user id in 'session-id' and the expiration to be 1hour (miliseconds) from now 

        res.setHeader('set-cookie', `session-id=${userId}; expires=${new Date(Date.now() + 60 * 60 * 1000).toUTCString()}`)
        
        */
            
        res.redirect('/')
    })
}