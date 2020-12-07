const { validateId, validateCallback } = require('./helpers/validations')
const path = require('path')
const fs = require('fs')

module.exports = (noteId, file, callback) => {
    validateId(noteId)
    // TODO validate file
    validateCallback(callback)

    const ws = fs.createWriteStream(path.join(__dirname, `../data/notes/${noteId}.jpg`))

    file.pipe(ws)

    // file.on('end', callback(null))

    // file.on('error', callback)
}