const { validateId } = require('./helpers/validations')
const { NotFoundError } = require('martachisfit-errors')
const { models: { Food } } = require('martachisfit-data')

/**
 * Retrieves a food by its id
 * 
 * @param {string} foodId 
 * 
 * @returns {Promise}
 */
module.exports = function (foodId) {
    validateId(foodId)

    return Food.findById(foodId).lean()
        .then(food => {
            if (!food) throw new NotFoundError(`food with id ${foodId} not found`)

            const { _id } = food

            food.id = _id.toString()

            return food
        })
}