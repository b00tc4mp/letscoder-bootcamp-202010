const { validateId, validateCallback } = require('./helpers/validations')

const context = require('./context')
const { env: { DB_NAME } } = process
const ObjectId = require('mongodb').ObjectId;


module.exports = (id, callback) => {
    validateId(id)
    validateCallback(callback)
    const { connection } = context

    const db = connection.db(DB_NAME)

    const users = db.collection('users')

    let _id = new ObjectId(id)
    //users.findById(ObjectId)
    users.findOne({_id} , (error, user) => {
        if (error) {

            return callback(error)
        }

        if (user) {
            const { _id, fullname, email, follows } = user

            user = { id: _id.toString(), fullname, email, follows }

            return callback(null, user)
        } else return callback(new Error(`user with id ${id} is not found`))

    })

}