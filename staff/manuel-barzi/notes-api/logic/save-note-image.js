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

            // TODO check why these fail
            // fromStream.on('end', resolve)
            // toStream.on('end', resolve)

            resolve()
        } catch (error) {
            reject(error)
        }
    })
}