const fs = require('fs')
const path = require('path')
const { createId } = require('../utils/ids')
const { validateCallback, validateId, validateText, validateTags, validateVisibility } = require('./helpers/validations')

module.exports = (owner, id, text, tags, visibility, callback) => {
    validateId(owner)
    if (typeof id !== 'undefined') validateId(id)
    validateText(text)
    validateTags(tags)
    validateVisibility(visibility)
    validateCallback(callback)

    const notesPath = path.join(__dirname, '../data/notes')
    // if we pass id
    if (id)
        fs.readdir(notesPath, (error, files) => {
            if (error) return callback(error);

            (function check(files, index = 0) {
                if (index < files.length) {
                    const file = files[index]

                    fs.readFile(path.join(notesPath, file), 'utf8', (error, json) => {
                        if (error) return callback(error)

                        const { id: _id } = JSON.parse(json)

                        if (id === _id) {
                            const note = { id, text, tags, owner, visibility, date: new Date() }

                            const json = JSON.stringify(note)

                            fs.writeFile(path.join(notesPath, `${id}.json`), json, error => {
                                if (error) return callback(error)

                                callback(null)
                            })
                        } else check(files, ++index)
                    })
                // if there are no notes in the folder
                } else {
                    id = createId()

                    const note = { id, text, tags, owner, visibility, date: new Date() }

                    const json = JSON.stringify(note)

                    fs.writeFile(path.join(notesPath, `${id}.json`), json, error => {
                        if (error) return callback(error)

                        callback(null)
                    })
                }
            })(files)
        })
    // if id is undefined
    else {
        id = createId()
        
        const note = { id, text, tags, owner, visibility, date: new Date() }

        const json = JSON.stringify(note)

        fs.writeFile(path.join(notesPath, `${id}.json`), json, error => {
            if (error) return callback(error)

            callback(null)
        })
    }
}