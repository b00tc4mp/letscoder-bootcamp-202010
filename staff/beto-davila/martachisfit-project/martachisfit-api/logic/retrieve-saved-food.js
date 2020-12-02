const { validateId } = require('./helpers/validations')
// const { NotFoundError } = require('../errors')
const { User, Food } = require('../models')

/**
 * Retrieves an array with the food added by the user to his/her diet
 * 
 * @param {string} userId 
 * 
 * @returns {Promise}
 */

module.exports = function (userId) {
    validateId(userId)

    let addedFood = []

    return User.findById(userId).lean()
        .then(user => {
            if (!user) throw new Error(`user with id ${userId} not found`)

            const { savedFood } = user

            return Promise.all(savedFood.map(foodId => 
                 Food.findById(foodId).lean()
                    .then(food => {
                        if (!food) throw new Error(`food with id ${foodId} not found`)

                        const {name, calories} = food
                         addedFood.push({ name, calories })
                         return addedFood
                    })
            ))
        })
        .then(results => {})
    }