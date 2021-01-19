const { validateId, validateStream } = require('./helpers/validations')
const path = require('path')
const fs = require('fs')
const { models: { User, Note } } = require('notes-data')
const { NotFoundError } = require('notes-errors')

module.exports = (userId, noteId, stream) => {
    validateId(userId)
    validateId(noteId)
    validateStream(stream)

    return User.findById(userId)
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            return Note.findById(noteId)
                .then(note => {
                    if (!note) throw new NotFoundError(`note with id ${noteId} not found`)

                    return new Promise((resolve, reject) => {
                        try {
                            const toStream = fs.createWriteStream(path.join(__dirname, `../data/notes/${noteId}.jpg`))

                            stream.pipe(toStream)

                            stream.once('end', resolve)
                        } catch (error) {
                            reject(error)
                        }
                    })
                })
        })
}