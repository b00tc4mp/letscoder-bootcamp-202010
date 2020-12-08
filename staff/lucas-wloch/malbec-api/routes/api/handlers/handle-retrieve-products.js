const retrieveProducts = require("../../../logic/retrieve-products")


module.exports = (req, res, handleError) => {
    const { params: { category } } = req
    debugger
    try {
        retrieveProducts(category)
            .then(products => res.status(200).json(products))
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}