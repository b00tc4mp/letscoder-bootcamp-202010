const { findFood } = require('../../../logic')

module.exports = (req, res, handleError) => {

    const { query: { q: query } } = req

    res.setHeader('Access-Control-Allow-Origin', '*')

    try {
        findFood(query)
        .then(food => res.status(200).json(food))
        .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}