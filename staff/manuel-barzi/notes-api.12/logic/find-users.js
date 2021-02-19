const { validateQuery } = require('./helpers/validations')
const { models: { User } } = require('notes-data')

module.exports = query => {
    validateQuery(query)

    // TODO search users by query matching any part of the fullname or the e-mail


    // IMPORTANT! create an index in db for this search SEE user schema that creates index from mongoose
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