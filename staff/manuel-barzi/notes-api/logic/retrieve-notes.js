const { validateId } = require('./helpers/validations')
const { NotFoundError } = require('notes-errors')
const { models: { User, Note } } = require('notes-data')

module.exports = ownerId => {
    validateId(ownerId)

    return User.findById(ownerId).lean()
        .then(user => {
            if (!user) new NotFoundError(`user with id ${ownerId} not found`)

            return Note.find({ owner: ownerId }, null, { sort: { date: -1 } }).lean()
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