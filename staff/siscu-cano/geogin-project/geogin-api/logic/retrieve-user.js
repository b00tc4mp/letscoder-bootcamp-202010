const { validateId } = require('./helpers/validations')
const { NotFoundError } = require('geogin-errors')
const { models: { User } } = require('geogin-data')

/**
 * Retrieve user
 * 
 * @param {string} id user id
 * 
 * @throws {NotFoundError} if user id dos not exist
 * 
 * @return {object} user object
 */

module.exports = function (id) {
    validateId(id)

    return User.findById(id)
    .then(user => {
        if (!user) throw new NotFoundError(`user with id ${userId} not found`)

        return user.save()
    })
    .then(({ id, fullname, email, image, score, favorites }) => ({ id, fullname, email, image, score, favorites }))
}
