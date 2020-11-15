// we need sessionId to accept cookies so that we bring sessions object
const sessions = require('../../sessions') 

module.exports = (req, res) => {
    const { cookies: { 'session-id': sessionId } } = req

    const session = sessions[sessionId]

    // no stored cookies in the browser --> 406 error!
    if (!session) return res.status(406).json({ error: 'could not accept cookies :( ' })

    session.cookiesAccepted = true

    return res.status(204).send()
}