const fs = require('fs')
const path = require('path')

// generic error handler to use it in async error handling
module.exports = handler =>
    (req, res) =>
        handler(req, res, error => {
            fs.readFile(path.join(__dirname, '../../../views/error.html'), 'utf8', (_error, content) => {
                if (_error) return res.status(500).send(`<h1>sorry, there was an error :( ERROR: ${error.message}</h1>`)

                res.status(500).send(content.replace('{message}', error.message))
            })
        })