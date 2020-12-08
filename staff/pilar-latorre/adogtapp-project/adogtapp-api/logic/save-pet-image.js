const { validateId, validateCallback } = require('./helpers/validations')
const path = require('path')
const fs = require('fs')

module.exports = (petId, file, callback) => {
    validateId(petId)
    // TODO validate file
    validateCallback(callback)

    const ws = fs.createWriteStream(path.join(__dirname, `../data/notes/${petId}.jpg`))

    file.pipe(ws)

    // file.on('end', callback(null))

    // file.on('error', callback)
}