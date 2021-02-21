const { retrieveLiveImage } = require('../../../logic')

module.exports = (req, res, handleError) => {
    const { params: { liveId } } = req

    try {
        retrieveLiveImage(liveId)
            .then(stream => {
                res.setHeader('Content-type', 'image/jpeg')

                stream.pipe(res)

                stream.on('error', handleError)
            })
    } catch (error) {
        handleError(error)
    }
}