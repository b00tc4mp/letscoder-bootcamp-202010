// const fs = require('fs')
// const path = require('path')
// const sessions = require('../../../sessions')
// const { createId } = require('../../../utils/ids')
// const { createSessionCookie } = require('./helpers/cookies')

module.exports = (req, res, handleError) => {
    // req destructuring to get the userId and cookiesAccepted value, once the user lands
    const { session: { userId, cookiesAccepted } }  = req

    // No register/login yet, show the 'register' content and replace the current value of 'cookiesAccepted', else, redirect to 'home'
    if (!userId)
        res.render('register', { feedback: '' , cookiesAccepted }, (error, html) => {
            if (error) return handleError(error)

            res.send(html)
        })
        // fs.readFile(path.join(__dirname, '../../views/register.html'), 'utf8', (error, content) => {
            
            // res.send(content
            //     .replace('{cookiesAccepted}', cookiesAccepted)
            //     .replace('{feedback}', ''))
    else res.redirect('/')
}