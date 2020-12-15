const { retrieveOfferImage } = require('../../../logic')

module.exports = (req, res, handleError) => {
    const { params: { offerId } } = req

    try {
        retrieveOfferImage(offerId)
            .then(stream => {
                res.setHeader('Content-type', 'image/jpeg')

                stream.pipe(res)

                stream.on('error', handleError)
            })
    } catch (error) {
        handleError(error)
    }
}