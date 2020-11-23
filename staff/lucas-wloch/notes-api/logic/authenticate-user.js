const { validateEmail, validatePassword, validateCallback } = require('./helpers/validations')
const context = require('./context')
const { env: { DB_NAME } } = process

module.exports = (email, password, callback) => {
    validateEmail(email)
    validatePassword(password)
    validateCallback(callback)

    const { connection } = context

    const db = connection.db(DB_NAME)

    const users = db.collection('users')

debugger
    users.findOne( { email } , (error, user) => {
        if(error){
           
            return callback(error)

        }
        if(user){
            
            const { _id } = user 
            return callback(null, _id)
        } else return callback(new Error('wrong credentials'))
       
    })
    
}