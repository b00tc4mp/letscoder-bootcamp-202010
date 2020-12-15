const retrieveProductById = require("../../../logic/retrieve-product-by-id")


module.exports = (req, res, handleError) => {
    const { params: { productId } } = req

    try {
        retrieveProductById(productId)
            .then(product => res.status(200).json(product))
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}