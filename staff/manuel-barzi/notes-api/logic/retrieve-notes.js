const { validateId } = require('./helpers/validations')
const { NotFoundError } = require('notes-errors')
const { User, Note } = require('../models')

module.exports = ownerId => {
    validateId(ownerId)

    return User.findById(ownerId).lean()
        .then(user => {
            if (!user) new NotFoundError(`user with id ${ownerId} not found`)

            return Note.find({ owner: ownerId }).lean()
        })
        .then(notes => {
            notes.forEach(note => {
                const { _id } = note

                note.id = _id.toString()

                delete note._id
                delete note.owner
            })

            return notes
        })
}