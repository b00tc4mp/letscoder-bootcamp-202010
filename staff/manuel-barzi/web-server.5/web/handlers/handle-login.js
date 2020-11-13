const fs = require('fs')
const path = require('path')
const authenticateUser = require('../../logic/authenticate-user')
const sessions = require('../../sessions')

module.exports = (req, res) => {
    const { body: { email, password }, cookies: { 'session-id': sessionId }} = req

    authenticateUser(email, password, (error, userId) => {
        if (error)
            return fs.readFile(path.join(__dirname, '../../views/error.html'), 'utf8', (_error, content) => {
                if (_error) return res.send(`sorry, there was an error :( ERROR: ${_error.message}`)

                res.send(content.replace('{message}', error.message))
            })

        const session = sessions[sessionId]

        session.userId = userId

        res.redirect('/')
    })
}