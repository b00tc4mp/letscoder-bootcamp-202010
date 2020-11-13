module.exports = {
    createSessionCookie(sessionId) {
        return `session-id=${sessionId}; expires=${new Date(Date.now() + 60 * 60 * 1000).toUTCString()}`
    }
}