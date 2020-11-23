const { validateText, validateCallback, validateId, validateTags, validateVisibility } = require('./helpers/validations')
const { createId } = require('../utils/ids')
const context = require('./context')
const ObjectId = require('mongodb').ObjectId;


const { env: { DB_NAME } } = process


module.exports = (noteId, text, tags, owner, visibility, callback) => {
    // if (typeof id !== 'undefined') validateId(id)
    validateText(text)
    // validateTags(tags)
    // validateId(owner)
    validateVisibility(visibility)
    validateCallback(callback)

    const { connection } = context

    const db = connection.db(DB_NAME)
    const users = db.collection('users')

    // let o_id = ObjectId.createFromHexString(id)

    users.findOne({ _id: ObjectId(owner) }, (error, user) => {
        if (error) {
            return callback(error)
        }
        if (!user) return callback(new Error(`user with id ${owner} not found`))

        const notes = db.collection('notes')
        if (noteId) {
            let _id = new ObjectId(noteId)
            notes.findOne({ _id }, (error, note) => {
                if (error) {
                    return callback(error)
                }
                if (!note) return callback(new Error(`note with id ${noteId} not found`))

                if (note) {
                    notes.updateOne({ _id }, { $set: { text, tags, visibility, date: new Date } }, (error, result) => {
                        if (error) return callback(error)
                        callback(null)
                    })
                    
                }
                
            })

        } else {
            const note = { text, tags, owner: ObjectId(owner), visibility, date: new Date }
            notes.insertOne(note, (error, result) => {
                if (error) {

                    return callback(error)
                }
                callback(null)
            })
        }
    })
}
