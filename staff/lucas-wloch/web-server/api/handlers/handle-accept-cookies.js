const sessions = require('../../sessions')


module.exports = (req, res) => {
    const { cookies: { 'session-id': sessionId} } = req
    const session = sessions[sessionId]

    if(!session) return res.status(406).json({ error: 'could not accept cookies :(' })

    session.cookiesAccepted = true
    
    return res.status(204).send()
}