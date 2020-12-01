/* const { validateId, validateCallback } = require('./helpers/validations')
const context = require('./context')
const { ObjectId } = require('mongodb')
const { NotFoundError } = require('../errors')

const { env: { DB_NAME } } = process

module.exports = function (ownerId, callback) {
    validateId(ownerId)
    validateCallback(callback)

    users.findOne({ _id }, (error, user) => {
        if (error) return callback(error)

        if (!user) return callback(new NotFoundError(`user with id ${ownerId} not found`))

        const notes = db.collection('notes')

        const owner = _id

        notes.find({ owner }, { sort: { date: -1 } }, (error, cursor) => {
            if (error) return callback(error)


            cursor.toArray((error, notes) => {
                if (error) return callback(error)

                notes = notes.map(({ _id, text, tags, visibility, date }) => ({ id: _id.toString(), text, tags, visibility, date }))

                callback(null, notes)
            })
        })
    })

}.bind(context) */