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

        let { chosenFoods } = user

        user = { userId: _id, chosenFoods: [] }

        return Food.findOne({_id: ObjectId(foodId)})
            .then(food => {

            if (!food) throw new Error(`food with id ${foodId} not found`)

            chosenFoods.push(ObjectId.createFromHexString(foodId))
    
            return User.updateOne({ _id }, { $set: { chosenFoods } })
                .then(result => {})

        })

    })

}