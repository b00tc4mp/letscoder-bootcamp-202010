
const { validateCallback } = require('./helpers/validations')

const context = require('./context')
const { env: { DB_NAME } } = process


module.exports = (query, callback) => {
    validateCallback(callback)
    const { connection } = context

    const db = connection.db(DB_NAME)

    const users = db.collection('users')
    debugger // /l/i
    
    users.find({fullname: new RegExp(query, 'i')}).toArray((error, results) => {
        if (error) {

            return callback(error)
        }

        if (results) {
            results = results.map( ({_id, fullname }) => ({ id: _id.toString(), fullname}) )
            debugger
            return callback(null, results)
        } else return callback(new Error(`user not found`))

    })

}