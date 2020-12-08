const { validateId } = require('./helpers/validations')
const { ObjectId } = require('mongodb')
const { NotFoundError } = require('../errors')
const { Recipe, User } = require('../models')

module.exports = (userId, recipeId) => {
    validateId(userId)
    validateId(recipeId)

    return User.findOne({_id: ObjectId(userId)})
        .then(user => {

        if (!user) throw new NotFoundError(`user with id ${userId} not found`)
        
        const { _id } = user

        let { savedRecipes } = user

        user = { userId: _id, savedRecipes: [] }

        return Recipe.findOne({_id: ObjectId(recipeId)})
            .then(recipe => {

            if (!recipe) throw new NotFoundError(`Recipe with id ${recipeId} not found`)

            // look for recipeId before adding. If it exists remove it, otherwise add it to 'savedRecipes' array
            if (savedRecipes.length) {
                // Store index position
                const index = savedRecipes.findIndex(Recipe => Recipe.toString() === recipeId)
    
                // if < 0, does not exist in array, add it, else, remove it with splice method
                index < 0? savedRecipes.push(ObjectId.createFromHexString(recipeId)) : savedRecipes.splice(index, 1)
    
                return User.updateOne({ _id }, { $set: { savedRecipes } })
                    .then(result => {})
    
            } else {
                // add new Recipe to empty array
                savedRecipes.push(ObjectId.createFromHexString(recipeId))
    
                return User.updateOne({ _id }, { $set: { savedRecipes } })
                    .then(result => {})
            }

        })

    })

}