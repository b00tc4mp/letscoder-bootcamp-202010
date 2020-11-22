const { validateQuery, validateCallback } = require('./helpers/validations')
const context = require('./context')
const { env: { DB_NAME } } = process

module.exports = function (query, callback) {

    validateQuery(query)
    validateCallback(callback)

    const { connection } = this

    const db = connection.db(DB_NAME)
    const users = db.collection('users')

    // const _query = `new RegExp(${query}, 'i')`

    users.find({fullname: new RegExp(query, 'i')}).toArray( (error, _users) => {
        if (error) return callback(error)

        if(_users)
            delete _users[0].password

        return callback(null, _users)
    })

}.bind(context)