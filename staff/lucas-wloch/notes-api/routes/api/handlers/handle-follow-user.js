const { followUser } = require('../../../logic')

module.exports = (req, res, handleError) => {
    
    const { body: { userId, followId } } = req

    try {
        followUser(userId, followId, (error, result) => {
            if (error) return handleError(401, error)

            res.status(200).send()
        })
    } catch (error) {
        handleError(400, error)
    }
}
