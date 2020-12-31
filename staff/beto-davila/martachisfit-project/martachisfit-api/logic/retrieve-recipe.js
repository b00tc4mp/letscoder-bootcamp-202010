const { validateId } = require('./helpers/validations')
const { NotFoundError } = require('martachisfit-errors')
const { models: { Recipe } } = require('martachisfit-data')

/**
 * Retrieves a recipe
 * 
 * @param {string} recipeId 
 * 
 * @returns {Promise}
 */
module.exports = function (recipeId) {
    validateId(recipeId)

    return Recipe.findById(recipeId).lean()
        .then(recipe => {
            if (!recipe) throw new NotFoundError(`recipe with id ${recipeId} not found`)

            const { _id, title, text, urlPathImg } = recipe
            recipe.id = _id.toString()

            const { id } = recipe

            return { id, title, text, urlPathImg }
        })
}