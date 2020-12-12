const { retrieveRecipe } = require('../../../logic')

module.exports = (req, res, handleError) => {

    const { params: { recipeId } } = req

    try {
        retrieveRecipe(recipeId)
            .then(recipe => res.status(200).json(recipe))
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}
