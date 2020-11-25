const { validateCallback, validateId } = require('./helpers/validations')
const context = require('./context')
const ObjectId = require('mongodb').ObjectId;


const { env: { DB_NAME } } = process


module.exports = (noteId) => {
    validateId(noteId)

    const { connection } = context

    const db = connection.db(DB_NAME)

    const notes = db.collection('notes')

    return notes
        .deleteOne({ _id: ObjectId(noteId) })
        .then(result => undefined)
}
