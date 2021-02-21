const { validateId } = require('./helpers/validations')
const ObjectId = require('mongodb').ObjectId;
const { NotFoundError } = require('../errors')
const { Note } = require('../models')




const { env: { DB_NAME } } = process


module.exports = (userId, noteId) => {
    validateId(userId)
    validateId(noteId)


    return Note
        .findOne({ _id: ObjectId(noteId), owner: ObjectId(userId) })
        .then(note => {
            if (!note) throw new NotFoundError(`couldnt delete note with id ${noteId}`)

            return Note
                .deleteOne({ _id: ObjectId(noteId) })
                .then(result => undefined)
        })
}
