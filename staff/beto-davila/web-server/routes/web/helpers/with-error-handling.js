const fs = require('fs')
const path = require('path')
const { logger } = require('../../../utils/logger')

module.exports = handler =>
    (req, res) =>
        handler(req, res, error => {
            fs.readFile(path.join(__dirname, '../../../views/error.html'), 'utf8', (_error, content) => {
                if (_error) return res.status(500).send(`<h1>sorry, there was an error :( ERROR: ${error.message}</h1>`)

                logger.log(error, 'error')

                res.status(500).send(content.replace('{message}', error.message))
            })
        })