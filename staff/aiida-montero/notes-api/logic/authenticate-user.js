const { validateEmail, validatePassword } = require('./helpers/validations')
const context = require('./context')

const { env: { DB_NAME } } = process

module.exports = function (email, password) {
    validateEmail(email)
    validatePassword(password)
    

    const { connection } = this

    const db = connection.db(DB_NAME)

    const users = db.collection('users')

    return users
    .findOne({ email, password }) 
    .then( user => {
       
        if (!user)  throw new Error('wrong credentials')

        const { _id } = user

       return _id.toString()
    })
}.bind(context)
