const { retrieveFood } = require('../../../logic')


module.exports = (req, res) => {
    

    try {
        retrieveFood(foodId)
            .then(food => res.status(200).json(food))
            .catch(console.error)
    } catch (error) {
        console.error(error.message)
    }
}