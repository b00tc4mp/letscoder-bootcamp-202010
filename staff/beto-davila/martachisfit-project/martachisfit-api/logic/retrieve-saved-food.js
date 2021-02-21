const { validateId } = require('./helpers/validations')
const { NotFoundError } = require('martachisfit-errors')
const { models: { User, Food } } = require('martachisfit-data')

/**
 * Retrieves an array with the food added by the user to his/her diet
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

            const { chosenFoods } = user

            return Promise.all(chosenFoods.map(foodId => 
                 Food.findById(foodId).lean()
                    .then(food => {
                        if (!food) throw new NotFoundError(`food with id ${foodId} not found`)

                        const {name, calories, carbs, protein, fats, _id} = food

                         return({ name, calories, carbs, protein, fats, _id })
                    })
            ))
        })
        .then(results => results)
    }