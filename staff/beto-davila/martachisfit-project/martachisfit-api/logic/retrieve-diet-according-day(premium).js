const { validateId } = require('./helpers/validations')
const { NotFoundError } = require('martachisfit-errors')
const { models: { User, Diet } } = require('martachisfit-data')

// this is a not-finished logic for a forseeable 'premium' version of the app

/**
 * Retrieves a diet by its id according the day of the week and the calories user goal
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

            const { calories } = user

            if (calories < 2000) {

                let today = new Date().getDay() // returns a number, 1 for Monday, 2 for Tuesday...

                return Diet.find().populate('calories', 'day').lean()
                    .then(diets => {
                        if (diets.length > 0) {
                            diets.forEach(diet => {
                                if (diet.day === today && diet.calories === 1800) {
                                    const { name, calories, day, type, macros, _id } = diet

                                    diet.id = _id.toString()

                                    return ({ name, calories, day, type, macros, id })

                                }
                            })
                        }
                    })

            } else if (calories >= 2000 && calories < 2500) {
                // same logic for this caloric range

            } else if (calories >= 2500) {
                // same logic for this caloric range

            }

        })
}