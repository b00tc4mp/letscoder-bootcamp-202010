const { validateId } = require('./helpers/validations')
const { NotFoundError } = require('martachisfit-errors')
const { models: { User, Diet } } = require('martachisfit-data')

/**
 * Retrieves a diet by its id
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

            const { _id, calories } = user

            user.id = _id.toString()

            if (calories < 2000) {

                let diets = ['5fcdf030c36fd45719909463', '5fcdf030c36fd45719909466', '5fcdf030c36fd45719909469']

                let random = Math.floor(Math.random() * diets.length)

                const dietId = diets[random]

                return Diet.findById(dietId).lean()
                    .then(_diet => {
                        if (!_diet) throw new NotFoundError(`diet with id ${dietId} not found`)

                        return _diet
                    })

            } else if (calories >= 2000 && calories < 2500) {

                let diets = ['5fcdf030c36fd45719909464', '5fcdf030c36fd45719909467', '5fcdf030c36fd4571990946a']

                let random = Math.floor(Math.random() * diets.length)

                const _dietId = diets[random]

                return Diet.findById(_dietId).lean()
                    .then(_diet => {
                        if (!_diet) throw new NotFoundError(`diet with id ${_dietId} not found`)

                        return _diet
                    })
            } else if (calories >= 2500) {

                let diets = ['5fcdf030c36fd45719909465', '5fcdf030c36fd45719909468', '5fcdf030c36fd4571990946b']

                let random = Math.floor(Math.random() * diets.length)

                const _dietId = diets[random]

                return Diet.findById(_dietId).lean()
                    .then(_diet => {
                        if (!_diet) throw new NotFoundError(`diet with id ${_dietId} not found`)

                        return _diet
                    })
            }

        })
}