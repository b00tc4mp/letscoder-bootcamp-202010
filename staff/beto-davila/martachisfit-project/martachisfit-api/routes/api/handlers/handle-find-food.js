const { findFood } = require('../../../logic')

module.exports = (req, res) => {

    const { body: { query } } = req

    res.setHeader('Access-Control-Allow-Origin', '*')

    try {
        findFood(query)
        .then(food => res.status(200).json(food))
        .catch(console.error)
    } catch (error) {
        console.error(error.message)
    }
}