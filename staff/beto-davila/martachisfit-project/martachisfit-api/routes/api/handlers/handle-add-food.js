const { addFood } = require('../../../logic')

module.exports = (req, res, handleError) => {
    const { body: { name, serving, calories, carbs, protein, fats } } = req

    try {
        addFood(name, serving, calories, carbs, protein, fats)
            .then(() => res.status(201).send())
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}