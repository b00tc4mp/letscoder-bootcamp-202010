const { validateId, validateCallback } = require('./helpers/validations')

const context = require('./context')
const { env: { DB_NAME } } = process
const ObjectId = require('mongodb').ObjectId;


module.exports = (id) => {
    validateId(id)

    const { connection } = context

    const db = connection.db(DB_NAME)

    const users = db.collection('users')

    let _id = new ObjectId(id)
    //users.findById(ObjectId)
    return users
        .findOne({ _id })
        .then(user => {
            if (user) {
                const { _id, fullname, email, follows } = user

                user = { id: _id.toString(), fullname, email, follows }

                return user
            } else throw new Error(`user with id ${id} is not found`)

        })
}