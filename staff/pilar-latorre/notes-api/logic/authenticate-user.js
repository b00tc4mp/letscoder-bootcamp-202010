const { validateEmail, validatePassword} = require('./helpers/validations')
const context = require('./context')
const { env: { DB_NAME } } = process

module.exports = (email, password, callback) => {
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
            throw new Error('wrong credentials')
       
    })
    
}