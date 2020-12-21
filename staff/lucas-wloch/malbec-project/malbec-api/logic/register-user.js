const { validateKey, validateEmail, validatePassword, validateFullname } = require('./helpers/validations')
const semaphore = require('./helpers/semaphore')
const { ConflictError, AuthError } = require('../errors')
const { models: { User } } = require('malbec-data')

const bcryptjs = require('bcryptjs')


module.exports = (key, fullname, email, password) => {
    validateKey(key)
    validateFullname(fullname)
    validateEmail(email)
    validatePassword(password)

    const SECRET_KEY = process.env.SECRET_KEY

    if(key !== SECRET_KEY) throw new AuthError('wrong secret key')

    return semaphore(() => {
        return User
            .findOne({ email })
            .then(user => {
                if (user) throw new ConflictError(`user with e-mail ${email} already registered`)

                return bcryptjs.hash(password, 10)
            })
            .then(hash => User.create({ fullname, email, password: hash }))
            .then(() => { })
        })
    }
    //user = new User({ fullname, email, password })
    // return user.save()

    //user = { fullname, email, password }
    //return new User(user).save()
    //return User.create(user)