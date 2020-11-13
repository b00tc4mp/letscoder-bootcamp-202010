const fs = require('fs')
const path = require('path')
const retrieveUser = require('../logic/retrieve-user')
//const session = require('./session')

module.exports = (req, res) => {
    const { cookies: { 'session-id' : userId } }  = req

    //if (session.userId)
    if (userId)
        //retrieveUser(session.userId, (error, user) => {
        retrieveUser(userId, (error, user) => {
            if (error)
                return fs.readFile(path.join(__dirname, '../views/error.html'), 'utf8', (_error, content) => {
                    if (_error) return res.send(`sorry, there was an error :( ERROR: ${_error.message}`)

                    res.send(content.replace('{message}', error.message))
                })

            fs.readFile(path.join(__dirname, '../views/home.html'), 'utf8', (error, content) => {
                if (error) return res.send(`sorry, there was an error :( ERROR: ${error.message}`)

                res.send(content.replace('{fullname}', user.fullname))
            })
        })
    else res.redirect('/login')
}