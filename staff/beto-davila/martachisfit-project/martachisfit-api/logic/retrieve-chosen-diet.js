const { validateId, validateDietType } = require('./helpers/validations')
const { NotFoundError } = require('../errors')
const { User, Diet } = require('../models')

/**
 * Retrieves a chosen diet by the user
 * 
 * @param {string} dietId 
 * 
 * @returns {Promise}
 */
module.exports = function (userId, dietType) {
    validateId(userId)
    validateDietType(dietType)

    return User.findById(userId).lean()
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            const { _id, calories } = user

            user.id = _id.toString()

            if (calories < 2000) {

                if (dietType === 'keto') {

                    return Diet.findById('5fcdf030c36fd45719909463').lean()
                        .then(_diet => {
                            if (!_diet) throw new NotFoundError(`diet with id ${dietId} not found`)

                            return _diet
                        })
                }

                else if (dietType === 'mediterranean') {

                    return Diet.findById('5fcdf030c36fd45719909466').lean()
                        .then(_diet => {
                            if (!_diet) throw new NotFoundError(`diet with id ${dietId} not found`)

                            return _diet
                        })
                }

                else if (dietType === 'vegan') {

                    return Diet.findById('5fcdf030c36fd45719909469').lean()
                        .then(_diet => {
                            if (!_diet) throw new NotFoundError(`diet with id ${dietId} not found`)

                            return _diet
                        })
                }

            } else if (calories >= 2000 && calories < 2500) {

                if (dietType === 'keto') {

                    return Diet.findById('5fcdf030c36fd45719909464').lean()
                        .then(_diet => {
                            if (!_diet) throw new NotFoundError(`diet with id ${dietId} not found`)

                            return _diet
                        })
                }

                else if (dietType === 'mediterranean') {

                    return Diet.findById('5fcdf030c36fd45719909467').lean()
                        .then(_diet => {
                            if (!_diet) throw new NotFoundError(`diet with id ${dietId} not found`)

                            return _diet
                        })
                }

                else if (dietType === 'vegan') {

                    return Diet.findById('5fcdf030c36fd4571990946a').lean()
                        .then(_diet => {
                            if (!_diet) throw new NotFoundError(`diet with id ${dietId} not found`)

                            return _diet
                        })
                }

            } else if (calories >= 2500) {

                if (dietType === 'keto') {

                    return Diet.findById('5fcdf030c36fd45719909465').lean()
                        .then(_diet => {
                            if (!_diet) throw new NotFoundError(`diet with id ${dietId} not found`)

                            return _diet
                        })
                }

                else if (dietType === 'mediterranean') {

                    return Diet.findById('5fcdf030c36fd45719909468').lean()
                        .then(_diet => {
                            if (!_diet) throw new NotFoundError(`diet with id ${dietId} not found`)

                            return _diet
                        })
                }

                else if (dietType === 'vegan') {

                    return Diet.findById('5fcdf030c36fd4571990946b').lean()
                        .then(_diet => {
                            if (!_diet) throw new NotFoundError(`diet with id ${dietId} not found`)

                            return _diet
                        })
                }
            }
        })
}