const fs = require('fs')
const path = require('path') // solve path problems when execting the scripts from different locations

module.exports = (req, res) => {
    fs.readFile(path.join(__dirname, '../../views/not-found.html'), 'utf8', (error, content) => {
        if (error) return res.send(`sorry, there was an error :( ERROR: ${error.message}`)

        // set the right status in this context in the response and send content ('not found' here)
        res.status(404).send(content)
    })
}