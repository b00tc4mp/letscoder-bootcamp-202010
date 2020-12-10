const { validateId, validateStream } = require('./helpers/validations')
const path = require('path')
const fs = require('fs')

module.exports = (noteId, stream) => {
    debugger
    validateId(noteId)
    validateStream(stream)

    return new Promise((resolve, reject) => {
        try {
            const toStream = fs.createWriteStream(path.join(__dirname, `../data/notes/${noteId}.jpg`))

            stream.pipe(toStream)

            stream.once('end', resolve)
        } catch (error) {
            reject(error)
        }
    })
}