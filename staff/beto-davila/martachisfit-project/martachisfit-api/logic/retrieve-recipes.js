const { validateId } = require('./helpers/validations')
const { NotFoundError } = require('../errors')
const { Recipe, User } = require('../models')

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

                    return(recipes)

        })
    })
}