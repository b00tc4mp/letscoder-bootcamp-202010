const { validateEmail, validatePassword, validateFullname } = require('./helpers/validations')
const semaphore = require('./helpers/semaphore')
const {User} =  require('../models')
const {ConflictError} = require ('../errors')

module.exports = function (fullname, email, password) {
    validateFullname(fullname)
    validateEmail(email)
    validatePassword(password)



    return semaphore( () => 
        User
        .findOne({ email })
        .then(user => {
            if (user) throw new ConflictError(`user with e-mail ${email} already registered`)
            
            return User.create({fullname, email, password})    
        
            })
             .then(() => {}) // Aqui viene la response vacia , por que el register no devuelve nada.
    )
}