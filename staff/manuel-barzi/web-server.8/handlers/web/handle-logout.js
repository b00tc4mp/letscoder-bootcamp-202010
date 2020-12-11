module.exports = (req, res) => {
    const { session } = req

    session.destroy(error => {
        if (error) return res.status(500).send(`sorry, there was an error :( ERROR: ${_error.message}`)

        res.setHeader('set-cookie', `session-id=NO-SESSION; max-age: 0; expires=${new Date().toUTCString()}`)
    
        res.redirect('/login')
    })

}