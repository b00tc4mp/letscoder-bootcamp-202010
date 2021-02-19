const { validateId, validateText, validateTags, validateVisibility } = require('./helpers/validations')
const { ObjectId } = require('mongodb')
const { NotFoundError } = require('notes-errors')
const { User, Note } = require('../models')

module.exports = (ownerId, noteId, text, tags, visibility) => {
    validateId(ownerId)
    if (typeof noteId !== 'undefined') validateId(noteId)
    validateText(text)
    validateTags(tags)
    validateVisibility(visibility)

    return User
        .findById(ownerId)
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${ownerId} not found`)

            if (noteId) {
                return Note
                    .findById(noteId)
                    .then(note => {
                        if (!note) throw new NotFoundError(`note with id ${noteId} not found`)

                        note.text = text
                        note.tags = tags
                        note.visibility = visibility

                        return note.save()
                    })
                    .then(note => note.id)
            } else
                return Note.create({ text, tags, visibility, owner: ObjectId(ownerId), date: new Date })
                    .then(note => note.id)
        })
}