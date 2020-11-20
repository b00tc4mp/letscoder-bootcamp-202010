const { validateId, validateCallback } = require('./helpers/validations')
const fs = require('fs')
const path = require('path')

// check the owner id in every note, and retrieve the ones corresponding to this owner

module.exports = (userId, callback) => {
    validateId(userId)
    validateCallback(callback)

    const notesPath = path.join(__dirname, `../data/notes`)

    const notes = []

    fs.readdir(notesPath, (error, files) => {
        if (error) return callback(error);
        
        if (files) {
            (function readNote(files, index = 0) {
                if (index < files.length) {
                    const file = files[index]
    
                    fs.readFile(path.join(notesPath, file), 'utf8', (error, json) => {
                        if (error) return callback(error)
    
                        const note = JSON.parse(json)

                        const { owner: _userId } = note
    
                        if (userId === _userId)
                            notes.push(note)

                        readNote(files, ++index) // warn! ++index to increment before invoking. index++ increment afterward.
                    })
                } else callback(null, notes)

            })(files)
        } else return callback (new Error('there are no notes to retrieve'))

    })
}