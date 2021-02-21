const { validateText, validateId, validateTags, validateVisibility } = require('./helpers/validations')
const ObjectId = require('mongodb').ObjectId;
const { NotFoundError } = require('../errors')
const { User, Note } = require('../models')




const { env: { DB_NAME } } = process


module.exports = (noteId, text, tags, owner, visibility) => {
    if (typeof id !== 'undefined') validateId(id)
    validateText(text)
    tags.length && validateTags(tags)
    validateId(owner)
    validateVisibility(visibility)

    const _id = ObjectId(owner)

    return User
        .findOne({ _id })
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${owner} not found`)


            if (noteId) {
                const _id = ObjectId(noteId)
                return Note
                    .findOne({ _id })
                    .then(note => {
                        if (!note) throw new NotFoundError(`note with id ${noteId} not found`)

                        return Note
                            .updateOne({ _id }, { $set: { text, tags, visibility, date: new Date } })
                            .then(result => undefined)
                    })

            } else {
                const note = { text, tags, owner: ObjectId(owner), visibility, date: new Date }
                return Note
                    .create(note)
                    .then(result => undefined)
            }
        })
}
