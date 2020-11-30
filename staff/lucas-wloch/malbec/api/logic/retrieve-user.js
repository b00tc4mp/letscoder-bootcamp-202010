const { validateId } = require('./helpers/validations')

const { NotFoundError } = require('../errors')
const { User } = require('../models')

module.exports = (id) => {
    validateId(id)

    return User
        .findById(id)
        .then(user => {
            if (user) {
                const { _id, fullname, email} = user

                user = { id: _id.toString(), fullname, email }

                return user
            } else throw new NotFoundError(`user with id ${id} is not found`)

        })
} 