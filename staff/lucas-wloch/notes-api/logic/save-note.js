const fs = require('fs')
const { validateText, validateCallback, validateId, validateTags, validateVisibility } = require('./helpers/validations')
const { createId } = require('../utils/ids')
const path = require('path')

module.exports = (id, text, tags, owner, visibility, callback) => {
    if (typeof id !== 'undefined') validateId(id)
    validateText(text)
    validateTags(tags)
    validateId(owner)
    validateVisibility(visibility)
    validateCallback(callback)


    const notesPath = path.join(__dirname, '../data/notes')

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

                            const note = { id, text, tags, owner, visibility }

                            const json = JSON.stringify(note)

                            fs.writeFile(path.join(notesPath, `${id}.json`), json, error => {
                                if (error) return callback(error)



                                callback(null)
                            })

                        } else check(files, ++index)
                    })
                } else callback(new Error(`note with id: ${id} not found`))
            })(files)
        })
    else {
        const id = createId()

        const note = { id, text, tags, owner, visibility }

        const json = JSON.stringify(note)

        fs.writeFile(path.join(notesPath, `${id}.json`), json, error => {
            if (error) return callback(error)

            callback(null)
        })
    }
}
