const { validateId, validateLevel } = require('./helpers/validations')
const { NotFoundError } = require('martachisfit-errors')
const { models: { Workout, User }, mongoose: { Types: { ObjectId } } } = require('martachisfit-data')


/**
 * Toggles according to the selected workout
 * 
 * @param {string} userId the user's id
 * @param {string} level the user level
 * 
 * @returns {undefined} returns undefined if successful
 * 
 * @throws {NotFoundError} if the user or the workout do not exist
 */

module.exports = (userId, level) => {
    validateId(userId)
    validateLevel(level)

    return User.findById(userId).lean()
        .then(user => {

            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            const { _id } = user

            let { myWorkouts } = user

            user = { userId: _id, myWorkouts: [] }

            if (level === 'beginner') {

                const beginnerWorkoutId = '5fd24f56b252584713e17320'

                return Workout.findById(beginnerWorkoutId).lean()
                    .then(workout => {

                        if (!workout) throw new NotFoundError(`workout with id ${beginnerWorkoutId} not found`)

                        if (myWorkouts.length) {
                            const index = myWorkouts.findIndex(workout => workout._id.toString() === beginnerWorkoutId)
                            index < 0 ? myWorkouts.push(beginnerWorkoutId) : myWorkouts.splice(index, 1)

                            return User.updateOne({ _id }, { $set: { myWorkouts } })
                                .then(result => { })

                        } else {
                            myWorkouts.push(beginnerWorkoutId)

                            return User.updateOne({ _id }, { $set: { myWorkouts } })
                                .then(result => { })
                        }

                    })
            } else if (level === 'intermediate') {

                const intermediateWorkoutId = '5fd24e8d28e0c746d361af52'

                return Workout.findById(intermediateWorkoutId).lean()
                    .then(workout => {

                        if (!workout) throw new NotFoundError(`workout with id ${intermediateWorkoutId} not found`)
                        if (myWorkouts.length) {
                            const index = myWorkouts.findIndex(workout => workout._id.toString() === intermediateWorkoutId)

                            index < 0 ? myWorkouts.push(intermediateWorkoutId) : myWorkouts.splice(index, 1)

                            return User.updateOne({ _id }, { $set: { myWorkouts } })
                                .then(result => { })

                        } else {
                            myWorkouts.push(intermediateWorkoutId)

                            return User.updateOne({ _id }, { $set: { myWorkouts } })
                                .then(result => { })
                        }

                    })
            } else if (level === 'advanced') {

                const advancedWorkoutId = '5fd24f11e717b546f7602b42'

                return Workout.findById(advancedWorkoutId).lean()
                    .then(workout => {

                        if (!workout) throw new NotFoundError(`workout with id ${advancedWorkoutId} not found`)
                        if (myWorkouts.length) {
                            const index = myWorkouts.findIndex(workout => workout._id.toString() === advancedWorkoutId)

                            index < 0 ? myWorkouts.push(advancedWorkoutId) : myWorkouts.splice(index, 1)

                            return User.updateOne({ _id }, { $set: { myWorkouts } })
                                .then(result => { })

                        } else {
                            myWorkouts.push(advancedWorkoutId)

                            return User.updateOne({ _id }, { $set: { myWorkouts } })
                                .then(result => { })
                        }

                    })
            }

        })

}