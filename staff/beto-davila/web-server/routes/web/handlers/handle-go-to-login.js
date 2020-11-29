// const fs = require('fs')
// const path = require('path')  solve path problems when execting the scripts from different locations
// const sessions = require('../../../sessions')
// const { createId } = require('../../../utils/ids')
// const { createSessionCookie } = require('./helpers/cookies')

module.exports = (req, res, handleError) => {
    // const { cookies: { 'session-id' : sessionId = createId() } }  = req
    // res.setHeader('set-cookie', createSessionCookie(sessionId))
    // const session = sessions[sessionId] || (sessions[sessionId] = {})

    const { session: { userId, cookiesAccepted} } = req

    // if (!session.userId) --> there is no register/login yet
    if (!userId)
        // fs.readFile(path.join(__dirname, '../../views/login.html'), 'utf8', (error, content) => {
        res.render('login', { feedback: '', cookiesAccepted}, (error, html) => {
            if (error) return handleError(error)

            res.send(html)
        })

            // res.send(content
            //     .replace('{cookiesAccepted}', cookiesAccepted)
            //     .replace('{feedback}',''))
    else res.redirect('/')
}
