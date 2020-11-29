// const fs = require('fs')
// const path = require('path') // solve path problems when executing the scripts from different locations
const { registerUser } = require('../../../logic/indexer')

module.exports = (req, res, handleError) => {
    // body passed by middleware urlencoded previously
    const { body: { fullname, email, password }, session: { cookiesAccepted } } = req

    registerUser(fullname, email, password, error => {
        if (error)
            return res.render('register', {feedback: error.message, cookiesAccepted }, (_error, html) => {
                if (_error) return handleError(_error)

                res.send(html)
            })
            // return fs.readFile(path.join(__dirname, '../../views/register.html'), 'utf8', (_error, content) => {

                // fs.readFile(path.join(__dirname, '../../views/register-confirm.html'), 'utf8', (error, content) => {
                res.render('register-confirm', (error, html) => {
                    if (error) return handleError(error)
        
                    res.send(html)
            })

        })    
}