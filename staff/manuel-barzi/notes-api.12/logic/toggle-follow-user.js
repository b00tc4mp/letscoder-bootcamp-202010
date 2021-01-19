const { validateId } = require('./helpers/validations')
const { NotFoundError } = require('notes-errors')
const { models: { User } } = require('notes-data')

module.exports = (userId, followingId) => {
    validateId(userId)
    validateId(followingId)

    return User.findById(userId)
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            const { followings = [] } = user

            const index = followings.findIndex(following => following.toString() === followingId)

            index < 0 ? followings.push(followingId) : followings.splice(index, 1)

            return user.save()
        })
        .then(() => { })
}