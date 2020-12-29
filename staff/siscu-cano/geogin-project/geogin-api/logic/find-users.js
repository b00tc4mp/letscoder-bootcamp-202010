const { validateQuery } = require('./helpers/validations')
const { models: { User } } = require('geogin-data')
 /**
 * Find user.
 * 
 * @param {String} query 
 * 
 * @throws {TypeError} - if is not a query (string)
 *
 * @returns {String} - users Object
 */

module.exports = query => {
    validateQuery(query)

    return User.find({ $text: { $search: query, $caseSensitive: false, $diacriticSensitive: false } })
        .then(users => {
            users.forEach(user => {
                const { _id } = user

                user.id = _id.toString()

                delete user._id
                delete user.password
            })

            return users
        })

}