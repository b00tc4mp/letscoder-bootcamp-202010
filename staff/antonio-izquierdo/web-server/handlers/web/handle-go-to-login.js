const fs = require('fs')
const path = require('path')

module.exports = (req, res) => {
    const { session: { userId, cookiesAccepted } } = req

    if (!userId)
        fs.readFile(path.join(__dirname, '../../views/login.html'), 'utf8', (error, content) => {
            if (error) return res.send(`sorry, there was an error :( ERROR: ${error.message}`)

            res.send(content.replace('{cookiesAccepted}', cookiesAccepted))
        })
    else res.redirect('/')
} 