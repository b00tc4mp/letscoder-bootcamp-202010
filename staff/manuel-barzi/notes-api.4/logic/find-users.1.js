const { validateQuery } = require('./helpers/validations')
const context = require('./context')

const { env: { DB_NAME } } = process

module.exports = function (query) {
    validateQuery(query)

    // TODO search users by query matching any part of the fullname or the e-mail

    const { connection } = this

    const db = connection.db(DB_NAME)

    const users = db.collection('users')

    const criteria = new RegExp(query, 'i')

    const cursor = users.find({ $or: [{ fullname: { $regex: criteria } }, { email: { $regex: criteria } }] })

    return cursor.toArray()
        .then(users => {
            //users = users.map(({ _id, fullname, email }) => ({ id: _id.toString(), fullname, email }))
            users.forEach(user => {
                const { _id } = user

                user.id = _id.toString()

                delete user._id
                delete user.password
            })

            return users
        })

}.bind(context)