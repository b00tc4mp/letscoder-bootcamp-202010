module.exports = (req, res) => {

    res.setHeader('set-cookie', `session-id=NO-SESSION; max-age: 0; expires=${new Date().toUTCString()}`)

    res.redirect('/login')
}