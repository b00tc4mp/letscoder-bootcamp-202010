const retrieveProductCategory = require("../../../logic/retrieve-product-category")


module.exports = (req, res, handleError) => {
    const { params: { category } } = req
    debugger
    try {
        retrieveProductCategory(category)
            .then(products => res.status(200).json(products))
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}