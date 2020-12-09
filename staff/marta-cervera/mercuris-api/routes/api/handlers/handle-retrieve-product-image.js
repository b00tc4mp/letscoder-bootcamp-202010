const { retrieveProductImage } = require('../../../logic')

module.exports = (req, res, handleError) => {
    debugger
    const { params: { productId } } = req

    try {
        retrieveProductImage(productId)
            .then(stream => {
                res.setHeader('Content-type', 'image/jpeg')

                stream.pipe(res)

                stream.on('error', handleError)
            })
    } catch (error) {
        handleError(error)
    }
}