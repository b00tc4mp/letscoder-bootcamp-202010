const { validateEmail, validatePassword, validateName } = require('./helpers/validations')
const semaphore = require('./helpers/semaphore')
const { ConflictError} = require('../errors')
const { models: { User } } = require('mercuris-data')
const bcryptjs = require('bcryptjs')

module.exports = function(name, email, password){
    validateName(name)
    validateEmail(email)
    validatePassword(password)
    return semaphore (() => 
        User
            .findOne({ email })
            .then( user =>{
                if ( user) throw new ConflictError(`user with ${email} already registered`)

                return bcryptjs.hash(password, 10)
            })
            .then(hash => User.create({ name, email, password: hash }))
            .then(()=> { })
    )
}