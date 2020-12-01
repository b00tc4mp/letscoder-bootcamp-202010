const fs = require('fs')
const path = require('path')

module.exports = {
    log(message, level = 'info', callback) {
        message = `${level} ${new Date().toISOString()} - ${message instanceof Error ? message.stack : message}\n`

        fs.appendFile(path.join(__dirname, '../server.log'), message, error => {
            if (error) return callback ? callback(error) : console.error(error)

            callback && callback(null)
        })
    }
}