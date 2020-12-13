const { validateId } = require('./helpers/validations')
const context = require('./context')
const { ObjectId } = require('mongodb')
const { NotFoundError } = require('../errors')

const { env: { DB_NAME } } = process

module.exports = function (userId) {
    validateId(userId)


    const { connection } = context

    const db = connection.db(DB_NAME)

    const users = db.collection('users')

    //const _id = new ObjectID(userId)
    //const _id = ObjectID(userId)
    //const _id = new ObjectId(userId)
    const _id = ObjectId(userId)

    return users
    .findOne({ _id })
    .then(user => {

        if (!user) throw new NotFoundError(`user with id ${userId} not found`)

        const { _id, fullname, email } = user

        user = { id: _id.toString(), fullname, email } // sanitise  

        return user
    })
}