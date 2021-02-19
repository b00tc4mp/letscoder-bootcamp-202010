const fs = require('fs')
const path = require('path')
const { createId } = require('../utils/ids')
const { validateId, validateText, validateTags, validateVisibility, validateCallback } = require('./helpers/validations')

module.exports = (ownerId, noteId, text, tags, visibility, callback) => {
    validateId(ownerId)
    if (typeof noteId !== 'undefined') validateId(noteId)
    validateText(text)
    validateTags(tags)
    validateVisibility(visibility)
    validateCallback(callback)

    const notesPath = path.join(__dirname, '../data/notes')

    if (noteId)
        fs.readdir(notesPath, (error, files) => {
            if (error) return callback(error);

            (function check(files, index = 0) {
                if (index < files.length) {
                    const file = files[index]

                    fs.readFile(path.join(notesPath, file), 'utf8', (error, json) => {
                        if (error) return callback(error)

                        const { id: _id } = JSON.parse(json)

                        if (noteId === _id) {
                            const note = { id: noteId, text, tags, owner: ownerId, visibility, date: new Date }

                            const json = JSON.stringify(note)

                            fs.writeFile(path.join(notesPath, `${noteId}.json`), json, error => {
                                if (error) return callback(error)

                                callback(null)
                            })
                        } else check(files, ++index)
                    })
                } else callback(new Error(`note with id ${noteId} not found`))
            })(files)
        })
    else {
        noteId = createId()

        const note = { id: noteId, text, tags, owner: ownerId, visibility, date: new Date }

        const json = JSON.stringify(note)

        fs.writeFile(path.join(notesPath, `${noteId}.json`), json, error => {
            if (error) return callback(error)

            callback(null)
        })
    }
}