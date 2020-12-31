const { validateId, validateName, validateNumber } = require('./helpers/validations')
const { models: { User, Food }, mongoose: { Types: { ObjectId } } } = require('martachisfit-data')
const { NotFoundError } = require('martachisfit-errors')

/**
 * Adds a food item to the db (admin only version)
 * 
 *      
 * @param {string} userId 
 * @param {string} foodId 
 * @param {string} name 
 * @param {string} serving 
 * @param {number} calories
 * @param {number} carbs
 *  @param {number} protein
 * @param {number} fats
 *
 */
module.exports = function (userId, foodId, name, serving, calories, carbs, protein, fats) {
    if (typeof foodId !== 'undefined') validateId(foodId)
    validateId(userId)
    validateName(name)
    validateNumber(serving)
    validateNumber(calories)
    validateNumber(carbs)
    validateNumber(protein)
    validateNumber(fats)

    const _id = ObjectId(userId)

    return User
        .findOne({ _id })
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            // TODO validates user is admin (app with admin version)
            if (foodId) {
                const _id = ObjectId(foodId)

                return Food
                    .findOne({ _id })
                    .then(food => {
                        if (!food) throw new NotFoundError(`food with id ${foodId} not found`)

                        return Food
                            .updateOne({ _id }, { $set: { name, serving, calories, carbs, protein, fats } })
                            .then(result => undefined)
                    })
            } else
                return Food.create({ name, serving, calories, carbs, protein, fats, user: ObjectId(userId) })
                    .then(result => undefined)
        })

}