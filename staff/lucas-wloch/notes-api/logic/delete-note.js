const {  validateCallback, validateId } = require('./helpers/validations')
const context = require('./context')
const ObjectId = require('mongodb').ObjectId;


const { env: { DB_NAME } } = process


module.exports = (noteId, callback) => {
    validateId(noteId)
    validateCallback(callback)

    const { connection } = context

    const db = connection.db(DB_NAME)

    const notes = db.collection('notes')

    notes.deleteOne({_id: ObjectId(noteId)}, (error, result) => {
        if (error) {
            return callback(error)
        }else return callback(null)
    }) 
}
