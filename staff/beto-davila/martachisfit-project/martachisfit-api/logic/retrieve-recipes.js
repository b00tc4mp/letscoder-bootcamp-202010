const { validateId } = require('./helpers/validations')
const { NotFoundError } = require('../errors')
const { Recipe, User } = require('../models')

/**
 * Retrieves an recipe
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

            // const articles = ['5fc927bdb87a0c980a11c6bf', '5fc9ec8147c1e4aa6bb54825', '5fcb210c700caee213c27ea8', '5fcb237f478137e2e3e9358d', '5fcb25f847e743e39d9c5831']

            // let random = Math.floor(Math.random() * articles.length)

            // const articleId = articles[random]

            return Recipe.findById('5fce3b1b9ee99c988a1205bb').lean()
                .then(recipe => {
                    if (!recipe) throw new NotFoundError(`recipe with id ${recipeId} not found`)

                    const { _id, text, title } = recipe
                    recipe.id = _id.toString()

                    const { id } = recipe

                    return { id, text, title }
        })
    })
}