const { validateId } = require('./helpers/validations')
const { NotFoundError } = require('martachisfit-errors')
const { models: { User, Recipe } } = require('martachisfit-data')

/**
 * Retrieves an array with the recipes added by the user
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

            const { savedRecipes } = user

            return Promise.all(savedRecipes.map(recipeId =>
                Recipe.findById(recipeId).lean()
                    .then(recipe => {
                        if (!recipe) throw new NotFoundError(`recipe with id ${recipeId} not found`)

                        const { urlPathImg, _id } = recipe

                        return ({ urlPathImg, _id })
                    })
            ))
        })
        .then(results => results)
}