const { validateId } = require('./helpers/validations')
const { NotFoundError } = require('../errors')
const { User } = require('../models')

/**
 * Retrieves a user by its id
 * 
 * @param {string} id 
 * 
 * @returns {Promise}
 */
module.exports = function (id) {
    validateId(id)

    return User.findById(id).populate('likes', 'id title description image').lean()
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${id} not found`)
              
            const { likes } = user

       /* likes.id = likes._id.toString() */
            
            delete likes._id
            delete likes.__v

            return likes
        })
}