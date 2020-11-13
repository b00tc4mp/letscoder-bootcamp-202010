//const session = require("./session")

module.exports = (req, res) => {
    //delete session.userId

    res.setHeader("set-cookie", `session-id=NO-SESSION; max-age: 0; expires=${new Date().toUTCString()}`)

    res.redirect('/login')
}