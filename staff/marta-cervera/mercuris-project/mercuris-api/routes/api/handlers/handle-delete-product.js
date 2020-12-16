const { deleteProduct } = require('../../../logic')


module.exports = (req, res, handleError) => {


    const { params: {productId} } = req


    try {

        deleteProduct(productId)
            .then(product => res.status(200).json(product))
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}