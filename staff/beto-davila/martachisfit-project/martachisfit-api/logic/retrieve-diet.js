const { validateId } = require('./helpers/validations')
const { NotFoundError } = require('../errors')
const { User, Diet } = require('../models')

/**
 * Retrieves a diet by its id
 * 
 * @param {string} dietId 
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

            if (calories >= 2000) {

                // var item = items[Math.floor(Math.random() * items.length)]

                const diets = ['5fc8838518ca4960a2a83721', '5fc8838518ca4960a2a83723', '5fc8838518ca4960a2a8371f']

                let random = Math.floor(Math.random() * diets.length)

                const dietId = diets[random]

                // const dietId = '5fc8838518ca4960a2a83721'

                return Diet.findById(dietId).lean()
                    .then(_diet => {
                    if (!_diet) throw new NotFoundError(`diet with id ${dietId} not found`)

                    return _diet
            })

            } else if ( calories < 2000 ) {

                let _dietId = '5fc8838518ca4960a2a83720'

                return Diet.findById(_dietId).lean()
                    .then(_diet => {
                    if (!_diet) throw new NotFoundError(`diet with id ${_dietId} not found`)

                    return _diet
        })
    }
    })
}