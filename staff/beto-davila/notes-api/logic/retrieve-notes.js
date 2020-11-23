const { validateId, validateCallback } = require('./helpers/validations')
// const fs = require('fs')
// const path = require('path')
const context = require('./context')
const { ObjectID } = require('mongodb')
const { env: { DB_NAME} } = process


module.exports = function (ownerId, callback) {
    validateId(ownerId)
    validateCallback(callback)

    const { connection } = this

    const db = connection.db(DB_NAME)

    const notes = db.collection('notes')

    // const users = db.collection('users')

    // const owner = ObjectID.createFromHexString(ownerId)

    notes.find({ owner: ObjectID.createFromHexString(ownerId)}, { sort: { date: -1 } }).toArray( (error, _notes) => {
    if (error) return callback(error)

    callback(null, _notes)
    })
  
}.bind(context)

// USING cursor.each() to get to know how the 'toArray' method works under the hood with the cursor.

/*

            const notes = []

            cursor.each((error, note) => {
                if (error) return callback(error)

                if (note) {
                    const { _id, text, tags, visibility, date } = note

                    note = { id: _id.toString(), text, tags, visibility, date }

                    notes.push(note)
                } else callback(null, notes)
            })
            */