const path = require('path')
const fs = require('fs')

module.exports = (req, res) => {
    const {cookies: { 'session-id' : userId } } = req

    fs.readFile(path.join(__dirname, '../views/login.html'), 'utf8', (error, content) => {
        if (error) return res.send(`sorry, there was an error :( ERROR: ${error.message}`)

        res.send(content)
    })
}