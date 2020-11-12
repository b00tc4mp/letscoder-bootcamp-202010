const session = require('./session')

module.exports = (req, res) => {
    delete session.userId

    res.redirect('/login')
}