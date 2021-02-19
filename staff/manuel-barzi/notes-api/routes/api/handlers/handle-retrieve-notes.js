const { retrieveNotes } = require('../../../logic')

module.exports = (req, res, next, handleError) => {
    try {
        const { userId } = req
    
        retrieveNotes(userId)
            .then(notes => res.status(200).json(notes))
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}