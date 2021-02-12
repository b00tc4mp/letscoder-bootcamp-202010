const { retrieveWorkout } = require('../../../logic')

module.exports = (req, res, handleError) => {

    try {
        const { params: { level } } = req
        retrieveWorkout(level)
            .then(workout => res.status(200).json(workout))
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}