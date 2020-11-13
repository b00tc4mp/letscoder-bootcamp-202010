const fs = require('fs')
const path = require('path')
const sessions = require('../sessions')
const { createId } = require('../utils/ids')
const { createSessionCookie } = require('./helpers/cookies')

module.exports = (req, res) => {
    debugger
    
    const { cookies: { 'session-id': sessionId = createId() } } = req

    res.setHeader('set-cookie', createSessionCookie(sessionId))

    const session = sessions[sessionId] || (sessions[sessionId] = {})

    const { userId, cookiesAccepted } = session

    if (!userId)
        fs.readFile(path.join(__dirname, '../views/login.html'), 'utf8', (error, content) => {
            if (error) return res.send(`sorry, there was an error :( ERROR: ${error.message}`)

            res.send(content.replace('{cookiesAccepted}', cookiesAccepted))
        })
    else res.redirect('/')
}