const { validateId, validateCallback } = require('./helpers/validations')
const context = require('./context')
const { ObjectId } = require('mongodb')
const { NotFoundError } = require('../errors')

const { env: { DB_NAME } } = process

module.exports = function (ownerId) {
    validateId(ownerId)
    validateCallback(callback)


    const { connection } = context

    const db = connection.db(DB_NAME)

    const users = db.collection('users')

    const _id = ObjectId(ownerId)

    return users
        .findOne({ _id })
        .then(user => {


            if (!user) throw new NotFoundError(`user with id ${ownerId} not found`)

            const notes = db.collection('notes')
            const owner = _id

            
            return notes.find({ owner},{ sort: { date: -1 } }).toArray()
            .then(notes => {
                notes = notes.map(({ _id, text, tags, visibility, date }) => ({ id: _id.toString(), text, tags, visibility, date }))
                console.log({notes})
                return notes
            }) 
        })
    }