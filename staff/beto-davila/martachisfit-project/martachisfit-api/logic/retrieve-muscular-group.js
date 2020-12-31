const { validateMuscularGroup } = require('./helpers/validations')
const { NotFoundError } = require('martachisfit-errors')
const { models: { Movement } } = require('martachisfit-data')

/**
 * Retrieves a muscular movement by its group
 * 
 * @param {string} group 
 * 
 * @returns {Promise}
 */
module.exports = function (group) {
    validateMuscularGroup(group)

    return Movement.find({ group }).lean()
        .then(movements => {
            if (!movements) throw new NotFoundError(`muscular movements not found for the group ${group}`)

            return Promise.all(movements.map(movementId =>
                Movement.findById(movementId).lean()
                    .then(movement => {
                        const { name, group, urlPathImg, _id } = movement

                        movement.id = _id.toString()

                        const { id } = movement

                        return ({ name, group, urlPathImg, id })
                    })
            ))
        })
        .then(movement => movement)
}