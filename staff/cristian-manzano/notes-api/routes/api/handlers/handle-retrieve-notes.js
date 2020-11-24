const { retrieveNotes } = require('../../../logic')

module.exports = (req, res, handleError) => {
    const { headers: { authorization } } = req

    // Bearer <token>
    const userId = authorization.replace('Bearer ', '')

    res.setHeader('Access-Control-Allow-Origin', '*')

    try {
        retrieveNotes(userId, (error, notes) => {
            if (error) return handleError(401, error)
debugger
            res.status(200).json(notes)
        })
    } catch (error) {
        handleError(400, error)
    }
}