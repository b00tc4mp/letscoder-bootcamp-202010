const { validateId, validateCallback } = require('./helpers/validations')
const fs = require('fs')
const path = require('path')

module.exports = (id, callback) => {
    validateId(id)
    validateCallback(callback)

    let results = []

    const notesPath = path.join(__dirname, '../data/notes')

    fs.readdir(notesPath, (error, files) => {

        (function check(files, index = 0) {
            if (index < files.length) {
                const file = files[index]

                fs.readFile(path.join(notesPath, file), 'utf8', (error, json) => {
                    if (error) return callback(error)

                    const note = JSON.parse(json)

                    if (note.owner === id) {
                        results.push(note)
                        check(files, ++index)

                    } else check(files, ++index)

                })
            } else if (results.length === 0) {
                callback(null, results)
            } else {
                callback(null, results)
            }

        })(files)

    })
}

