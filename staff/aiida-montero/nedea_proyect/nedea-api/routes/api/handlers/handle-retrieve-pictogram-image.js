const { retrievePictogramImage } = require('../../../logic')


module.exports = (req, res, handleError) => {
    const { params: { pictogramId } } = req
    try {
        retrievePictogramImage(pictogramId)
            .then(stream => {
                res.setHeader('Content-type', 'image/jpeg')

                stream.pipe(res)

                stream.on('error', handleError)
            })
    } catch (error) {
        handleError(error)
    }
}