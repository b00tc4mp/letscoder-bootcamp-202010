const { validateId } = require('./helpers/validations')
const context = require('./context')
const {NotFoundError} = require ('../errors')
const { ObjectId } = require('mongodb')
const { User } = require('../models')


module.exports = function (userId) {
    validateId(userId)

     console.log(userId)

    return User
    .findOne({ userId }) 
    .then (user => {
         if (!user) throw new NotFoundError(`user with id ${userId} not found`)
         debugger
         const { id, fullname, email } = user
         console.log(user)
         user = { id : id.toString(), fullname, email } // sanitise  
         console.log(user)
 
         return User({user})
    })
}