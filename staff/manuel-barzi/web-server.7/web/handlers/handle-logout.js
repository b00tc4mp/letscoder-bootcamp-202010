const sessions = require('../../sessions')

module.exports = (req, res) => {
    const { session: { id } } = req

    delete sessions[id]

    res.setHeader('set-cookie', `session-id=NO-SESSION; max-age: 0; expires=${new Date().toUTCString()}`)

    res.redirect('/login')
}