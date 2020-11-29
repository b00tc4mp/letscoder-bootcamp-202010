const fs = require('fs')
const path = require('path')

module.exports = {
    log(message, level = 'info', callback) {
        message = `${level} ${new Date().toISOString()} - ${message}\n`

        // fs.writeFile(path.join(__dirname, 'server.log'), message, { flag: 'a' }, error => {

        //Asynchronously append data to a file, creating the file if it does not yet exist
        fs.appendFile(path.join(__dirname, '../server.log'), message, error => {
            if (error) return callback ? callback(error) : console.error(error)

            callback && callback(null)
        })
    }
}