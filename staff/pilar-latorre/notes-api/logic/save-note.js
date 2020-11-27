const { validateId, validateText, validateTags, validateVisibility} = require('./helpers/validations')
const { ObjectId } = require('mongodb')
const { NotFoundError } = require('../errors')
const { Note } = require('../models')
const { User } = require('../models')


module.exports = function (noteId, text, tags, ownerId, visibility) {
    validateId(ownerId)
    if (typeof noteId !== 'undefined') validateId(noteId)
    validateText(text)
    validateTags(tags)
    validateVisibility(visibility)
 
    const _id = ObjectId(ownerId)

    return User
        .findOne({ _id })
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${ownerId} not found`)

       
        if (noteId) {
            const _id = ObjectId(noteId)

            return Note
                .findOne({ _id })
                .then (note => {
                    if (!note) throw new NotFoundError(`note with id ${noteId} not found`)

                return Note
                    .updateOne({ _id }), { $set: { text, tags, visibility }}
                    .then (result => undefined) 
                
            })
        } else
            return Note
            .create({ text, tags, owner: ObjectId(ownerId), visibility, date: new Date })
            .then(result => undefined)
           
    })
}