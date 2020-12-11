const { validateEmail, validatePassword, validateFullname } = require('./helpers/validations')
const semaphore = require('./helpers/semaphore')
const { ConflictError } = require('../errors')
const { User }  = require('../models')
const bcryptjs = require('bcryptjs')


module.exports = (fullname, email, password) => {
    validateFullname(fullname)
    validateEmail(email)
    validatePassword(password)


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