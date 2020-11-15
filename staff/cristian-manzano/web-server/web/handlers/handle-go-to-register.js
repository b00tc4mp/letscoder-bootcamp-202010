const fs = require('fs')
const path = require('path')
const session = require('../../sessions')
const { createId } = require('../../utils/ids')

module.exports = (req, res) => {
    const { cookies: { 'session-id' : sessionId = createId() } }  = req

     res.seatHeader('set-cookie', createSessionCookie(sessionId))

     const session = sessions[sessionId] || (sessions[sessionId] = {})

     const { userId, cookiesAccepted } = session

    if (!userId)
        fs.readFile(path.join(__dirname, '../../views/register.html'), 'utf8', (error, content) => {
            if (error) return res.send(`sorry, there was an error :( ERROR: ${error.message}`)

            res.send(content.replace('{cookiesAccepted}', cookiesAccepted))
        })
    else res.redirect('/')
} 