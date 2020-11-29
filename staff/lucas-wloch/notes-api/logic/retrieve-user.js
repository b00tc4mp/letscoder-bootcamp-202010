const { validateId } = require('./helpers/validations')

const ObjectId = require('mongodb').ObjectId;
const { NotFoundError } = require('../errors')
const { User } = require('../models')

module.exports = (id) => {
    validateId(id)

    //users.findById(ObjectId)
    return User
        .findById(id)
        .then(user => {
            if (user) {
                const { _id, fullname, email, follows = [] } = user

                user = { id: _id.toString(), fullname, email, follows }

                return user
            } else throw new NotFoundError(`user with id ${id} is not found`)

        })
}