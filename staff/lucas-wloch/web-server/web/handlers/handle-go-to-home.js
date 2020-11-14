const path = require('path')
const fs = require('fs')
const retrieveUser = require('../../logic/retrieve-user')
const sessions = require('../../sessions')


module.exports = (req, res) => {
    
    const {cookies: { 'session-id' : sessionId } } = req

    const session = sessions[sessionId]
    if (session && session.userId)
        fs.readFile(path.join(__dirname, '../../views/home.html'), 'utf8', (error, content) => {
            if (error) return res.send(`sorry, there was an error :( ERROR: ${error.message}`)

            retrieveUser(session.userId, (error, user) => {
                if (error) {
                    return fs.readFile(path.join(__dirname, '../../views/error.html'), 'utf8', (_error, content) => {
                        if (_error) return res.send(`sorry, there was an error :( ERROR: ${_error.message}`)

                        res.send(content.replace('{message}', error.message))
                    })
                }


                res.send(content.replace('{fullname}', user.fullname).replace('{email}', ''))
            })
        })
    else res.redirect('/login')
}