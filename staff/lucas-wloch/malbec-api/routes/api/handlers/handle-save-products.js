const saveProducts = require("../../../logic/save-products")


module.exports = (req, res, handleError) => {
    const { body: { productId, name, description, price, glutenFree, vegan, alergenos, category, available } } = req

    debugger
    try {
        saveProducts(productId, name, description, price, glutenFree, vegan, alergenos, category, available)
            .then(() => res.status(201).send())
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}