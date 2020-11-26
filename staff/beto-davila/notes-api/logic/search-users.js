const { validateQuery } = require('./helpers/validations')
const context = require('./context')
const { env: { DB_NAME } } = process

module.exports = function (query) {

    validateQuery(query)

    const { connection } = this

    const db = connection.db(DB_NAME)
    const users = db.collection('users')

    const cursor = users.find({ $or: [{fullname: new RegExp(query, 'i')}, {email: new RegExp(query, 'i') } ]})
        return cursor
            .toArray()
            .then(_users => {

            if(_users)

                delete _users[0].password
                delete _users[0]._id
                delete _users[0].followings
                delete _users[0].email

                return _users
    })

}.bind(context)