const { validateId } = require('./helpers/validations')
const context = require('./context')
const { ObjectId } = require('mongodb')
const { NotFoundError } = require('../errors')

const { env: { DB_NAME } } = process

module.exports = function (ownerId) {
    validateId(ownerId)

    const { connection } = this

    const db = connection.db(DB_NAME)

    const users = db.collection('users')

    const _id = ObjectId(ownerId)

    return users
        .findOne({ _id })
        .then(user => {
                if (!user) throw new NotFoundError(`user with id ${ownerId} not found`)

        const notes = db.collection('notes')

        const owner = _id

        return notes
        .find({ owner},{ sort: { date: -1 } }).toArray()
        .then(notes => {
            const result = notes.map(({ _id, text, tags, visibility, date }) => ({ id: _id.toString(), text, tags, visibility, date }))
            console.log({result})
            return result
        }) /* (cursor => {
                console.log({cursor})
                cursor.toArray(notes => {
                    console.log(notes)
                return _notes = notes.map(({ _id, text, tags, visibility, date }) => ({ id: _id.toString(), text, tags, visibility, date }))

            })
        }) */
    })

}.bind(context) 

