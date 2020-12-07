const { validateId } = require('./helpers/validations')
const { NotFoundError } = require('../errors')
const { RecipeImg, User } = require('../models')

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

            // const recipes = ['']

            // let random = Math.floor(Math.random() * recipes.length)

            // const recipeId = recipes[random]

            recipeImgId = '5fcd38349943ba45f9f98869'

            return RecipeImg.findById(recipeImgId).lean()
                .then(recipeImg => {
                    if (!recipeImg) throw new NotFoundError(`recipeImg with id ${recipeImgId} not found`)

                    const { _id, title, img: { data }, recipeId } = recipeImg
                    recipeImg.id = _id.toString()

                    const newData = data.toString('base64')

                    const { id } = recipeImg

                    return { id, title, newData, recipeId }
        })
    })
}