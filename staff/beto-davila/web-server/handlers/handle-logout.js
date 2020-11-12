//const session = require('./session')

module.exports = (req, res) => {
    //delete session.userId

    // header setup for the cookie to expire at the moment when the user log out
    res.setHeader('set-cookie', `session-id=NO-SESSION; max-age: 0; expires=${new Date().toUTCString()}`)

    res.redirect('/login')
}