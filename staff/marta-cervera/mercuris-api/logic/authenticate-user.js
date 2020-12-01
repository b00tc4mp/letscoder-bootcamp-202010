const {validateEmail, validatePassword } = require('./helpers/validations')
const { User } = require('../models')
const bcrypts = require('bcryptjs')


module.exports = function(email, password) {
    validateEmail(email)
    validatePassword(password)

    return User.findOne({email}).lean()
        .then(user =>{
            if(!user) throw new Error('wrong credentials')

            const { password: hash} = user

            return bcrypts.compare(password, hash)
            .then(match =>{
                if(!match) throw new Error('wrong credentials')

                const {_id} = user

                return _id.toString()
            })
        })
}