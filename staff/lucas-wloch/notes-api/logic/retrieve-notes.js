const { validateId, validateCallback } = require('./helpers/validations')
const context = require('./context')
const { env: { DB_NAME } } = process
const ObjectId = require('mongodb').ObjectId;


module.exports = (owner) => {
    validateId(owner)

    const { connection } = context

    const db = connection.db(DB_NAME)

    const users = db.collection('users')

    return users
        .findOne({ _id: ObjectId(owner) })
        .then(user => {
            if (!user) throw new Error(`user with id ${owner} not found`)

            const notes = db.collection('notes')

            const cursor = notes.find({ owner: ObjectId(owner) }, { sort: { date: -1 } })

            return cursor.toArray()
                .then(notes => {
                    notes = notes.map(({ _id, text, tags, visibility, date }) => ({ id: _id.toString(), text, tags, owner, visibility, date }))

                    return notes
                })
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
