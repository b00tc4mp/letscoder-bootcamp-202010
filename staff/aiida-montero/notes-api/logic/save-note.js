const { validateId, validateText, validateTags, validateVisibility, validateCallback } = require('./helpers/validations')
const context = require('./context')
const { ObjectId } = require('mongodb')

const { env: { DB_NAME } } = process

module.exports = function (ownerId, noteId, text, tags, visibility) {
    validateId(ownerId)
    if (typeof noteId !== 'undefined') validateId(noteId)
    validateText(text)
    validateTags(tags)
    validateVisibility(visibility)

    const { connection } = this

    const db = connection.db(DB_NAME)

    const users = db.collection('users')

    const _id = ObjectId(ownerId)

    return users
    .findOne({ _id }) 
    .then (user => {
        if (!user) throw new Error(`user with id ${ownerId} not found`)

        const notes = db.collection('notes')

        if (noteId) {
            const _id = ObjectId(noteId)

            return notes 
            .findOne({ _id })
            .then ( note => {
                if (!note) throw new Error(`note with id ${noteId} not found`)

                return notes
                .updateOne({ _id } , { $set: { text, tags, visibility }}  )
                .then (result => undefined)
                
                })
        
        } else
        return notes
        .insertOne({ text, tags, visibility, owner: ObjectId(ownerId), date: new Date }) 
        .then (result  => undefined)
         
    })
}.bind(context)