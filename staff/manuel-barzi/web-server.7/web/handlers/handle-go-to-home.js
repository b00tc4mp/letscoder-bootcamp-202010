const fs = require('fs')
const path = require('path')
const retrieveUser = require('../../logic/retrieve-user')

module.exports = (req, res) => {
    const { session: { userId } }  = req

    if (userId)
        retrieveUser(userId, (error, user) => {
            if (error)
                return fs.readFile(path.join(__dirname, '../../views/error.html'), 'utf8', (_error, content) => {
                    if (_error) return res.send(`sorry, there was an error :( ERROR: ${_error.message}`)

                    res.send(content.replace('{message}', error.message))
                })

            fs.readFile(path.join(__dirname, '../../views/home.html'), 'utf8', (error, content) => {
                if (error) return res.send(`sorry, there was an error :( ERROR: ${error.message}`)

                res.send(content.replace('{fullname}', user.fullname))
            })
        })
    else res.redirect('/login')
}