const { validateEmail, validatePassword} = require('./helpers/validations')
const context = require('./context')
const { env: { DB_NAME } } = process
const { AuthError } = require('../errors')


module.exports = (email, password) => {
    validateEmail(email)
    validatePassword(password)

    const { connection } = context

    const db = connection.db(DB_NAME)

    const users = db.collection('users')


    return users
        .findOne( { email, password }) 
        .then (user => {
            if(user){
                const { _id } = user 
                return _id.toString()
     

        } else 
            throw new AuthError('wrong credentials')
       
    })
    
}