const { validateText, validateCallback, validateId, validateTags, validateVisibility } = require('./helpers/validations')
const { createId } = require('../utils/ids')
const context = require('./context')
const ObjectId = require('mongodb').ObjectId;


const { env: { DB_NAME } } = process


module.exports = (noteId, text, tags, owner, visibility) => {
    if (typeof id !== 'undefined') validateId(id)
    validateText(text)
    tags.length && validateTags(tags)
    validateId(owner)
    validateVisibility(visibility)

    const { connection } = context

    const db = connection.db(DB_NAME)

    const users = db.collection('users')

    const _id = ObjectId(owner)

    return users
        .findOne({ _id })
        .then(user => {
            if (!user) throw new Error(`user with id ${owner} not found`)

            const notes = db.collection('notes')

            if (noteId) {
                const _id = ObjectId(noteId)
                return notes
                    .findOne({ _id })
                    .then(note => {
                        if (!note) throw new Error(`note with id ${noteId} not found`)

                        return notes
                            .updateOne({ _id }, { $set: { text, tags, visibility, date: new Date } })
                            .then(result => undefined)
                    })

            } else {
                const note = { text, tags, owner: ObjectId(owner), visibility, date: new Date }
                return notes
                    .insertOne(note)
                    .then(result => undefined)
            }
        })
}
