const { validateId } = require('./helpers/validations')
const ObjectId = require('mongodb').ObjectId;
const { NotFoundError } = require('../errors')
const { User, Note } = require('../models')




module.exports = (owner) => {
    validateId(owner)

    return User
        .findOne({ _id: owner })
        .then( user => {
            if (!user) throw new NotFoundError(`user with id ${owner} not found`)

            // , { sort: { date: -1 } }
            return Note.find({ owner })
                .then(notes => {
                    notes = notes.map(({ _id, text, tags, visibility, date }) => ({ id: _id.toString(), text, tags, owner, visibility, date }))

                    return notes
                })


            // const cursor = Note.find({ owner: ObjectId(owner) }, { sort: { date: -1 } })
            // return cursor.toArray()
            //     .then(notes => {
            //         notes = notes.map(({ _id, text, tags, visibility, date }) => ({ id: _id.toString(), text, tags, owner, visibility, date }))

            //         return notes
            //     })
        })

    // notes.find({ owner: ObjectId(owner) }).toArray((error, results) => {
    //     if (error) {

    //         return callback(error)
    //     }
    //     if (results) {
    // results = results.map(({_id, text, tags, owner, visibility}) => ({id: _id.toString(), text, tags, owner: owner.toString(), visibility}))
    //         return callback(null, results)
    //     }
    // })
}
