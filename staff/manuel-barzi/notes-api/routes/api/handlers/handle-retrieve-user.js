const { retrieveUser } = require('../../../logic')

module.exports = (req, res, next, handleError) => {
    try {
        const { userId } = req

        retrieveUser(userId)
            .then(user => res.status(200).json(user))
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}