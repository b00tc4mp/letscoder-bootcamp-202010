const { retrieveNotes } = require('../../../logic')

module.exports = (req, res, handleError) => {
    
    const id = req.headers.authorization.replace('Bearer ', '')


    res.setHeader('Access-Control-Allow-Origin', '*')

    try {
        retrieveNotes(id, (error, notes) => {
            if (error) return handleError(401, error)

            res.status(200).json({notes})
        })
    } catch (error) {
        handleError(400, error)
    }
}
