const sessions = require('../sessions')
const { createId } = require('../utils/ids')

const createSessionCookie = sessionId => {
    return `session-id=${sessionId}; expires=${new Date(Date.now() + 60 * 60 * 1000).toUTCString()}`
}

module.exports = (req, res, next) => {
    const { cookies: { 'session-id': sessionId = createId() } } = req

    res.setHeader('set-cookie', createSessionCookie(sessionId))

    const session = sessions[sessionId] || (sessions[sessionId] = { id: sessionId })

    req.session = session

    next()
}