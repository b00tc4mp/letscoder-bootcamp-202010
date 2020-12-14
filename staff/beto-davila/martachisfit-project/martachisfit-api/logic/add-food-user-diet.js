const { validateId } = require('./helpers/validations')
const { NotFoundError } = require('../errors')
const { models: { Food, User }, mongoose: { Types: { ObjectId } } } = require('martachisfit-data')

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