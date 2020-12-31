const { validateId } = require('./helpers/validations')
const { NotFoundError } = require('martachisfit-errors')
const { models: { User, Workout } } = require('martachisfit-data')

/**
 * Retrieves an array with the articles added by the user
 * 
 * @param {string} userId 
 * 
 * @returns {Promise}
 */

module.exports = function (userId) {
    validateId(userId)


    return User.findById(userId).lean()
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            const { myWorkouts } = user

            return Promise.all(myWorkouts.map(workoutId =>
                Workout.findById(workoutId).lean()
                    .then(workout => {
                        if (!workout) throw new NotFoundError(`workout with id ${workoutId} not found`)

                        const { name, _id, level } = workout

                        workout.id = _id.toString()

                        const { id } = workout

                        return ({ name, id, level })
                    })
            ))
        })
        .then(results => results)
}