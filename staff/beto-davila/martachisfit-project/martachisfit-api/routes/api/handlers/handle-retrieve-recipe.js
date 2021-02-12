const { retrieveRecipe } = require('../../../logic')

module.exports = (req, res, handleError) => {

    try {
        const { params: { recipeId } } = req

        retrieveRecipe(recipeId)
            .then(recipe => res.status(200).json(recipe))
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}
