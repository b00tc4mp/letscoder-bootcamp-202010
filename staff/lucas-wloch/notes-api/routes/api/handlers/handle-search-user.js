const { searchUserFullname } = require('../../../logic')

module.exports = (req, res, handleError) => {
    const {body: { query } } = req

    try {
        searchUserFullname(query, (error, results) => {
            if (error) return handleError(204, error)

            res.status(200).json(results)
        })
    } catch (error) {
        handleError(400, error)
    }
}
