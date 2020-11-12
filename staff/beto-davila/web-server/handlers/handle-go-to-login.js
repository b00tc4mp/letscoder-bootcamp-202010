const fs = require('fs')
const path = require('path') // solve path problems when execting the scripts from different locations

// const session = require('./session')

module.exports = (req, res) => {
    const { cookies: { 'session-id' : userId } }  = req

    // if (!session.userId)
    if (!userId)
        fs.readFile(path.join(__dirname, '../views/login.html'), 'utf8', (error, content) => {
            if (error) return res.send(`sorry, there was an error :( ERROR: ${error.message}`)

            res.send(content)
        })
    else res.redirect('/')
}
