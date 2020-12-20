// const fs = require('fs')
// const path = require('path')
// const { ObjectId } = require('mongodb')
const { validateId } = require('./helpers/validations')
const { NotFoundError } = require('../errors')
const { User } = require('../models')

/**
 * Retrieves a user by its id
 * 
 * @param {string} userId 
 * 
 * @returns {Promise}
 */

module.exports = function (userId) {
    validateId(userId)

    // const _id = ObjectId.createFromHexString(userId)

    return User
        .findById(userId).lean()
        .then( user => {

                if (!user) throw new NotFoundError(`The user with id ${userId} was not found`)
                    
                const { _id } = user

                user.id = _id.toString()

                delete user._id
                delete user.password

                return user
                })
}