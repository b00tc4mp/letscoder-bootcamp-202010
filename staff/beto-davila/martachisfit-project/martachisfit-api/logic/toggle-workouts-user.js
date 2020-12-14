const { validateId, validateLevel } = require('./helpers/validations')
const { ObjectId } = require('mongodb')
const { NotFoundError } = require('../errors')
const { Workout, User } = require('../models')
 
module.exports = (userId, level) => {
    validateId(userId)
    validateLevel(level)

    return User.findOne({_id: ObjectId(userId)})
        .then(user => {

        if (!user) throw new NotFoundError(`user with id ${userId} not found`)
        
        const { _id } = user

        let { myWorkouts } = user

        user = { userId: _id, myWorkouts: [] }

        return Workout.findOne({level})
            .then(workout => {

            if (!workout) throw new NotFoundError(`workout with level ${level} not found`)

            // look for level before adding. If it exists remove it, otherwise add it to 'myWorkouts' array
            if (myWorkouts.length) {
                // Store index position
                const index = myWorkouts.findIndex(workout => workout === level)
    
                // if < 0, does not exist in array, add it, else, remove it with splice method
                index < 0? myWorkouts.push(level) : myWorkouts.splice(index, 1)
    
                return User.updateOne({ _id }, { $set: { myWorkouts } })
                    .then(result => {})
    
            } else {
                // add new workout to empty array
                myWorkouts.push(level)
    
                return User.updateOne({ _id }, { $set: { myWorkouts } })
                    .then(result => {})
            }

        })

    })

}