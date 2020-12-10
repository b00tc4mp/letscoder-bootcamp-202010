const { validateLevel } = require('./helpers/validations')
const { NotFoundError } = require('../errors')
const { Workout } = require('../models')

/**
 * Retrieves a workout by level
 * 
 * @param {string} level 
 * 
 * @returns {Promise}
 */
module.exports = function (level) {
    validateLevel(level)

    // return User.findById(userId).lean()
    //     .then(user => {
    //         if (!user) throw new NotFoundError(`user with id ${userId} not found`)

    //         const { _id } = user

    //         user.id = _id.toString()

                if (level === 'beginner') {

                return Workout.findById('5fd216d2b8f2cf383b183c35').lean()
                    .then(workout => {
                    if (!workout) throw new NotFoundError(`workout with id ${workoutId} not found`)

                    const {name, daysWeek, level, setsWeek, _id, layout} = workout

                    workout.id = _id.toString()

                    const { id } = workout

                    return {name, daysWeek, level, setsWeek, id, layout}
                    })
                }

                else if (level === 'intermediate') {

                    return Workout.findById('5fd21f40926e4439dfc65eba').lean()
                    .then(workout => {
                    if (!workout) throw new NotFoundError(`workout with id ${workoutId} not found`)

                    const {name, daysWeek, level, setsWeek, _id, layout} = workout

                    workout.id = _id.toString()

                    const { id } = workout

                    return {name, daysWeek, level, setsWeek, id, layout}
                    })
                }

                else if (level === 'advanced') {

                    return Workout.findById('5fd22ee1ddd5e63cdbd2cdbd').lean()
                    .then(workout => {
                    if (!workout) throw new NotFoundError(`workout with id ${workoutId} not found`)

                    const {name, daysWeek, level, setsWeek, _id, layout} = workout

                    workout.id = _id.toString()

                    const { id } = workout

                    return {name, daysWeek, level, setsWeek, id, layout}
                    })
                }
}