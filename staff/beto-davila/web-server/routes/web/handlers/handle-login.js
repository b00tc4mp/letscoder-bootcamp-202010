// const fs = require('fs')
// const path = require('path')
const { authenticateUser } = require('../../../logic/indexer')

module.exports = (req, res, handleError) => {

    // 'req' destructuring to get email, password and sessionId from the respective middlewares
    const { body: { email, password }, session: { cookiesAccepted } } = req

    // auth logic: check if user exists in db (read the files one at a time, and try to match user and password, otherwise login error)
    authenticateUser(email, password, (error, userId) => {
        if (error)
            return res.render('login', {feedback: error.message, cookiesAccepted }, (_error, html) => {
                if (_error) return handleError(_error)

                res.send(html)
            })
            // return fs.readFile(path.join(__dirname, '../../views/login.html'), 'utf8', (_error, content) => {
                
                // return error content on wrong auth. The replace method will show the error '{message}' within the html content
                
                // res.send(content
                //     .replace('{message}', error.message)
                //     .replace('{feedback}', `<p class="feedback feedback--error">${error.message}</p>`))
                const { session } = req

                session.userId = userId

                session.save(error => {
                    if (error) return handleError(error)
         
                    res.redirect('/')
            })
        
        /* setting header to match the user id in 'session-id' and the expiration to be 1hour (miliseconds) from now 

        res.setHeader('set-cookie', `session-id=${userId}; expires=${new Date(Date.now() + 60 * 60 * 1000).toUTCString()}`)
        
        */
            
    })
}