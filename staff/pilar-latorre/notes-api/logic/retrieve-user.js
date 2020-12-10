const { validateId } = require('./helpers/validations')
const { User } = require('../models')
const { ObjectId } = require('mongodb')
const { NotFoundError } = require('../errors')


module.exports = function (userId) {
    validateId(userId)
   
    const _id = ObjectId(userId)

    return User
        .findOne({ _id })
        .then( user => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            const { _id, fullname, email } = user

        user = { id: _id.toString(), fullname, email } // sanitise  
        
        return user
    })
}