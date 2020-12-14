const { validateEmail, validatePassword } = require('./helpers/validations')

const { models: { User } }  = require('gameloop-data')
const bcryptjs = require('bcryptjs')

module.exports = function (email, password) {
    validateEmail(email)
    validatePassword(password)
    
    return User.findOne({ email }).lean()
        .then(user => {
            if (!user) throw new Error('wrong credentials')

            const { password: hash } = user

            return bcryptjs.compare(password, hash)
                .then(match => {
                    if (!match) throw new Error('wrong credentials')

                    const { _id } = user

                    return _id.toString()
                })
        })
}