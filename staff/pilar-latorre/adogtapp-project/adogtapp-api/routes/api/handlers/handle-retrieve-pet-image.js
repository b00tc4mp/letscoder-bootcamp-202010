const { retrievePetImage } = require('../../../logic')

module.exports = (req, res, handleError) => {
    const { params: { petId } } = req

    try {
        retrievePetImage(petId)
            .then(stream => {
                res.setHeader('Content-type', 'image/jpeg')

                stream.pipe(res)

                stream.on('error', handleError)
            })
    } catch (error) {
        handleError(error)
    }
}