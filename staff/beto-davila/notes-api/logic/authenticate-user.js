// const fs = require('fs')
// const path = require('path')
const { validateEmail, validatePassword } = require('./helpers/validations')
const { AuthError } = require('../errors')
// const context = require('./context')
const { User } = require('../models')
const bcryptjs = require('bcryptjs')

module.exports = (email, password) => {
    validateEmail(email)
    validatePassword(password)

    // const { connection } = this
    // const db = connection.db(DB_NAME)
    // const users = db.collection('users')

    return User.findOne({email}).lean() 
                .then(user => {

                if (!user) throw new AuthError('wrong credentials')

                    const { password: hash } = user

                    return bcryptjs.compare(password, hash)
                        .then(match => {
                            if (!match) throw new AuthError('wrong credentials')

                            const { _id } = user
        
                            return _id.toString()
        
                        })

            })
}