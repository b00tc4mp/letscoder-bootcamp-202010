const { validateId } = require('./helpers/validations')
const { ObjectId } = require('mongodb')
// const { NotFoundError } = require('../errors')
const { Food, User } = require('../models')
 
module.exports = (userId, foodId) => {
    validateId(userId)
    validateId(foodId)

    return User.findOne({_id: ObjectId(userId)})
        .then(user => {

        if (!user) throw new Error(`user with id ${userId} not found`)
        
        const { _id } = user

        let { savedFood } = user

        user = { userId: _id, savedFood: [] }

        return Food.findOne({_id: ObjectId(foodId)})
            .then(food => {

            if (!food) throw new Error(`food with id ${foodId} not found`)

            // look for foodId before adding. If it exists remove it, otherwise add it to 'savedFood' array
            if (savedFood.length) {
                // Store index position
                const index = savedFood.findIndex(food => food.toString() === foodId)
    
                // if < 0, does not exist in array, add it, else, remove it with splice method
                index < 0? savedFood.push(ObjectId.createFromHexString(foodId)) : savedFood.splice(index, 1)
    
                return User.updateOne({ _id }, { $set: { savedFood } })
                    .then(result => {})
    
            } else {
                // add new food to empty array
                savedFood.push(ObjectId.createFromHexString(foodId))
    
                return User.updateOne({ _id }, { $set: { savedFood } })
                    .then(result => {})
            }

        })

    })

}