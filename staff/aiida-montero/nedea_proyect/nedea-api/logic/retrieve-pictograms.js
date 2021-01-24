const { validateId } = require('./helpers/validations')
const { NotFoundError } = require('../errors')
const { models: { User, Pictogram } } = require('nedea-data')

module.exports = ownerId => {
    validateId(ownerId)

    return User.findById(ownerId).lean()
        .then(user => {
            if (!user) new NotFoundError(`user with id ${ownerId} not found`)

            return Pictogram.find({ owner: ownerId }).lean()
        })
        .then(pictograms => {
            pictograms.forEach(pictogram => {
                const { _id } = pictogram

                pictogram.id = _id.toString()

                delete pictogram._id
                delete pictogram.owner
            })

            return pictograms
        })
}