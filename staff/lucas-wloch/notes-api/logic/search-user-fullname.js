
const { validateQuery } = require('./helpers/validations')

const context = require('./context')
const { env: { DB_NAME } } = process


module.exports = (query) => {
    validateQuery(query)

    const { connection } = context

    const db = connection.db(DB_NAME)

    const users = db.collection('users')

    const cursor = users.find({ $or: [{ fullname: new RegExp(query, 'i')} , {email: new RegExp(query, 'i') }]})

    return cursor.toArray()
        .then(users => {
            if (users) {
                users = users.map(({ _id, fullname }) => ({ id: _id.toString(), fullname }))
                // users.forEach(user => {
                //     const { _id } = user
                //     user.id = _id.toString()

                //     delete user._id
                //     delete user.password
                // }


                return users
            } else throw new Error(`user not found`)

        })

}