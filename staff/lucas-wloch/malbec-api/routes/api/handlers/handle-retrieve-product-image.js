const retrieveProductImage = require("../../../logic/retrieve-product-image")


module.exports = (req, res, handleError) => {
    const { params: { productId } } = req

    try {
        retrieveProductImage(productId)
            .then(stream => {
                res.setHeader('Content-type', 'image/jpeg')

                stream.pipe(res)

                stream.on('error', handleError)
            })
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}