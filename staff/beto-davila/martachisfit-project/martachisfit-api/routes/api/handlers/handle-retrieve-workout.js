const { retrieveWorkout } = require('../../../logic')
// const jwt = require('jsonwebtoken')

// const { env: { JWT_SECRET } } = process

module.exports = (req, res, handleError) => {
    
    const { params: { level } } = req

    // const token = authorization.replace('Bearer ', '')

    try {
        // const { sub: userId } = jwt.verify(token, JWT_SECRET)
        retrieveWorkout(level)
            .then(workout => res.status(200).json(workout))
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}