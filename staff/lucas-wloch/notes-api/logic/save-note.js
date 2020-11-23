const { validateText, validateCallback, validateId, validateTags, validateVisibility } = require('./helpers/validations')
const { createId } = require('../utils/ids')
const context = require('./context')
const ObjectId = require('mongodb').ObjectId;


const { env: { DB_NAME } } = process


module.exports = (id, text, tags, owner, visibility, callback) => {
    // if (typeof id !== 'undefined') validateId(id)
    validateText(text)
    // validateTags(tags)
    // validateId(owner)
    validateVisibility(visibility)
    validateCallback(callback)

    const { connection } = context

    const db = connection.db(DB_NAME)
    debugger
    const notes = db.collection('notes')
    let _id = new ObjectId(id)
    // let o_id = ObjectId.createFromHexString(id)

    // findOne().toArray(function(errorn, _notes))
    if (id)
        notes.findOne({ _id}, (error, note) => {
            if (error) {
                return callback(error)
            }

            if (note) {
                note = { _id, text, tags, owner, visibility }
                notes.insertOne(note, (error, result) => {
                    if (error) {
                        return callback(error)
                    }
                    callback(null)
                })
            }
        })

    else {
        const note = { _id, text, tags, owner, visibility }
        notes.insertOne(note, (error, result) => {
            if (error) {

                return callback(error)
            }
            callback(null)
        })
    }
}
