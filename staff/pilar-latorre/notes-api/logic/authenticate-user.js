const { validateEmail, validatePassword} = require('./helpers/validations')
const { AuthError } = require('../errors')
const { User } = require('../models')


module.exports = (email, password) => {
    validateEmail(email)
    validatePassword(password)

    return User
        .findOne( { email, password })
        .then (user => {
            if(user){
                const { _id } = user 
                return _id.toString()
     

        } else 
            throw new AuthError('wrong credentials')
       
    })
    
}