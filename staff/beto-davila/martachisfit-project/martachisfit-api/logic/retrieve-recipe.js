const { validateId } = require('./helpers/validations')
const { NotFoundError } = require('../errors')
const { Recipe } = require('../models')

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
                if (!recipe) throw new NotFoundError(`recipeImg with id ${recipeId} not found`)

                const { _id, title, text, urlPathImg } = recipe
                recipe.id = _id.toString()

                const { id } = recipe

                return { id, title, text, urlPathImg }
        })
}