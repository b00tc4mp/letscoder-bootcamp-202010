const fs = require('fs')
const path = require('path')

module.exports = (req, res) => {
    fs.readFile(path.join(__dirname, '../../views/not-found.html'), 'utf8', (error, content) => {
        if (error) return res.send(`sorry, there was an error :( ERROR: ${error.message}`)

        res.status(404).send(content)


    })


}