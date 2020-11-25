// const fs = require('fs')
// const path = require('path')
// const { createId } = require('../utils/ids')
const { validateId, validateText, validateTags, validateVisibility } = require('./helpers/validations')
const context = require('./context')
const { env: { DB_NAME } } = process
const { ObjectID } = require('mongodb')

module.exports = function (owner, id, text, tags, visibility) {
    validateId(owner)
    if (typeof id !== 'undefined') validateId(id)
    validateText(text)
    validateTags(tags)
    validateVisibility(visibility)

    const { connection } = this

    const db = connection.db(DB_NAME)

    const notes = db.collection('notes')

    const users = db.collection('users')

    const _id = ObjectID(owner)

    // find user firstly
    return users
        .findOne({ _id })
        .then(user => {

            if (!user) throw new Error(`the user with id ${owner} does not exist`)

            // exists note: find and update 
            if (id) {
                const _id = ObjectID(id)

                return notes
                    .findOne({ _id })
                        .then(note => {
                            if (!note) throw new Error(`the note with id ${id} does not exist`)

                            return notes
                                .updateOne({ _id }, { $set: { text, tags, visibility } })
                                .then(result => undefined)
                        })  
                
                        }
            // note does not exist: insert
            else 
                notes
                    .insertOne({ owner: ObjectID(owner), text, tags, visibility, date: new Date })
                    .then(result => undefined)

        })
}.bind(context)
