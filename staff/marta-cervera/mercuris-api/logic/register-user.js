const { validateEmail, validatePassword, validateName } = require('./helpers/validations')
const semaphore = require('./helpers/semaphore')
const { User } = require('../models')
const bcryptjs = require('bcryptjs')

module.exports = function(name, email, password){
    validateName(name)
    validateEmail(email)
    validatePassword(password)
    return semaphore (() => 
        User
            .findOne({ email })
            .then( user =>{
                if ( user) throw new Error(`user with ${email} already registerd`)

                return bcryptjs.hash(password, 10)
            })
            .then(hash => User.create({ name, email, password: hash }))
            .then(()=> { })
    )
}