const { validateId, validateCallback } = require('./helpers/validations')
const context = require('./context')
const { ObjectId } = require('mongodb')

const { env: { DB_NAME } } = process

module.exports = function (ownerId, callback) {
    validateId(ownerId)
    validateCallback(callback)

    const { connection } = this

    const db = connection.db(DB_NAME)

    const users = db.collection('users')

    const _id = ObjectId(ownerId)

    users.findOne({ _id }, (error, user) => {
        if (error) return callback(error)

        if (!user) return callback(new Error(`user with id ${ownerId} not found`))

        const notes = db.collection('notes')

        const owner = _id

        notes.find({ owner }, (error, cursor) => {
            if (error) return callback(error)

            // TODO

            cursor.forEach()
        })
    })

}.bind(context)