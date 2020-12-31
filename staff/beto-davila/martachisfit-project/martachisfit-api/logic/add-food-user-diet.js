const { validateId } = require('./helpers/validations')
const { NotFoundError } = require('martachisfit-errors')
const { models: { Food, User }, mongoose: { Types: { ObjectId } } } = require('martachisfit-data')

/**
 * Adds a food item on the user's food daily record
 * 
 * @param {string} userId user's id
 * @param {string} foodId food's item id
 * 
 * @returns {undefined}
 * 
 * @throws {NotFoundError} on not found userId
 * @throws {NotFoundError} on non-existent foodId
 */

module.exports = (userId, foodId) => {
    validateId(userId)
    validateId(foodId)


    return User.findOne({ _id: ObjectId(userId) })
        .then(user => {

            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            const { _id } = user

            let { chosenFoods } = user

            user = { userId: _id, chosenFoods: [] }

            return Food.findOne({ _id: ObjectId(foodId) })
                .then(food => {

                    if (!food) throw new NotFoundError(`food with id ${foodId} not found`)

                    chosenFoods.push(ObjectId.createFromHexString(foodId))

                    return User.updateOne({ _id }, { $set: { chosenFoods } })
                        .then(result => { })

                })

        })

}