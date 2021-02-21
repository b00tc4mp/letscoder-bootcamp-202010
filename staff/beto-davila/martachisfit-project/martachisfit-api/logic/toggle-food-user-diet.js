const { validateId } = require('./helpers/validations')
const { NotFoundError } = require('martachisfit-errors')
const { models: { Food, User }, mongoose: { Types: { ObjectId } } } = require('martachisfit-data')

/**
 * Toggles according to the selected food item
 * 
 * @param {string} userId the user's id
 * @param {string} foodId the food's id
 * 
 * @returns {undefined} returns undefined if successful
 * 
 * @throws {NotFoundError} if the user or the food do not exist
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

                    // look for foodId before adding. If it exists remove it, otherwise add it to 'chosenFoods' array
                    if (chosenFoods.length) {
                        // Store index position
                        const index = chosenFoods.findIndex(food => food.toString() === foodId)

                        // if < 0, does not exist in array, add it, else, remove it with splice method
                        index < 0 ? chosenFoods.push(ObjectId.createFromHexString(foodId)) : chosenFoods.splice(index, 1)

                        return User.updateOne({ _id }, { $set: { chosenFoods } })
                            .then(result => { })

                    } else {
                        // add new food to empty array
                        chosenFoods.push(ObjectId.createFromHexString(foodId))

                        return User.updateOne({ _id }, { $set: { chosenFoods } })
                            .then(result => { })
                    }

                })

        })

}