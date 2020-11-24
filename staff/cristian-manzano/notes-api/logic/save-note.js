const { validateText, validateTags, validateVisibility, validateCallback, } = require("./helpers/validations");

const context = require('./context')
const { ObjectId } = require('mongodb')

const { env: { DB_NAME } } = process

module.exports = function (ownerId, noteId, text, tags, visibility, callback) {
    //if (typeof id !== 'undefined') validateId(id)
    validateText(text);
    validateTags(tags);
    //validateId(owner);
    validateVisibility(visibility);
    validateCallback(callback);

    const { connection } = context

    const db = connection.db(DB_NAME)

    const users = db.collection('users')


    const _id = ObjectId(ownerId)

    users.findOne({ _id }, (error, user) => {
        if (error) return callback(error)

        if (!user) return callback(new Error(`user with id ${ownerId} not found`))

        const notes = db.collection('notes')

        if (noteId) {
            const _id = ObjectId(noteId)

            notes.findOne({ _id }, (error, note) => {
                if (error) return callback(error)

                if (!note) return callback(new Error(`note with id ${noteId} not found`))

                notes.updateOne({ _id }, { $set: { text, tags, visibility }}, (error, result) => {
                    if (error) return callback(error)

                    callback(null)
                })
            })
        } else notes.insertOne({ text, tags, visibility, owner: ObjectId(ownerId), date: new Date }, (error, result) => {
            if (error) return callback(error)

            callback(null)
        })
    })
}