const { validateId } = require('./helpers/validations')
// const { NotFoundError } = require('../errors')
const { User, Food } = require('../models')
const {ObjectId} = require('mongodb')

/**
 * Retrieves an array with the food added by the user to his/her diet
 * 
 * @param {string} userId 
 * 
 * @returns {Promise}
 */
module.exports = function (userId) {
    validateId(userId)
    let result = []

    return User.findById(userId).lean()
        .then(user => {
            if (!user) throw new Error(`user with id ${userId} not found`)

            const { savedFood } = user

            savedFood.map(foodId => {
                return Food.findById(foodId).lean()
                .then(food => {
                    if (!food) throw new Error(`food with id ${foodId} not found`)

                    result.push({name, calories})
                })
            })
            return result
            
        })
    }