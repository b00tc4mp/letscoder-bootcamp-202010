const { validateId } = require('./helpers/validations')
const { NotFoundError } = require('../errors')
const { Recipe, User } = require('../models')
const fs = require('fs')

const imgPath = '../data/test-img/donuts-blue.png'

/**
 * Retrieves an article
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

            const recipes = ['']

            let random = Math.floor(Math.random() * recipes.length)

            const recipeId = recipes[random]

            return Recipe.findById(recipeId).lean()
                .then(recipe => {
                    if (!recipe) throw new NotFoundError(`recipe with id ${recipeId} not found`)

                    const { _id } = recipe
                    recipe.id = _id.toString()

                    return recipe
        })
    })
}