const fs = require('fs')
const path = require('path')
const session = require('./session')

module.exports = (req, res) => {
    if (!session.userId)
        fs.readFile(path.join(__dirname, '../views/register.html'), 'utf8', (error, content) => {
            if (error) return res.send(`sorry, there was an error :( ERROR: ${error.message}`)

            res.send(content)
        })
    else res.redirect('/')
}