// const fs = require('fs')
// const path = require('path')
// const { createId } = require('../utils/ids')
const { validateId, validateText, validateTags, validateVisibility } = require('./helpers/validations')
const { ObjectID } = require('mongodb')
const { NotFoundError } = require('../errors')
const { Note, User } = require('../models')

module.exports = (owner, id, text, tags, visibility) => {
    validateId(owner)
    if (typeof id !== 'undefined') validateId(id)
    validateText(text)
    validateTags(tags)
    validateVisibility(visibility)

    const _id = ObjectID(owner)

    // find user firstly
    return User
        .findOne({ _id })
        .then(user => {

            if (!user) throw new NotFoundError(`the user with id ${owner} does not exist`)

            // exists note: find and update 
            if (id) {
                const _id = ObjectID(id)

                return Note
                    .findOne({ _id })
                        .then(note => {
                            if (!note) throw new NotFoundError(`the note with id ${id} does not exist`)

                            return Note
                                .update({ _id }, { $set: { text, tags, visibility } })
                                .then(result => undefined)
                        })  
                
                        }
            // note does not exist: insert
            else 
                Note
                    .create({ owner: ObjectID(owner), text, tags, visibility, date: new Date })
                    .then(result => {})

        })
}
