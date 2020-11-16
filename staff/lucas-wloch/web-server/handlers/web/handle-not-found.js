const fs = require('fs')
const path = require('path')

module.exports = (req,res, handleError) => {
    fs.readFile(path.join(__dirname, '../../views/not-found.html'), 'utf8', (error,content) => {
        if (error) return handleError(error)

        res.status(404).send(content)
    })
}