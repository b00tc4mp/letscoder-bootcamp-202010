const { validateId } = require('./helpers/validations')
const { NotFoundError } = require('martachisfit-errors')
const { models: { Recipe, User } } = require('martachisfit-data')

/**
 * Retrieves recipes
 * 
 * @param {string} userId 
 * 
 * @returns {Promise}
 */
module.exports = function (userId) {
    validateId(userId)

    return User.findById(userId).lean()
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            return Recipe.find({}).lean()
                .then(recipes => {
                    if (!recipes) throw new NotFoundError('no found recipes')

                    return (recipes)

                })
        })
}