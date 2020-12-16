const { retrieveUserImage } = require('../../../logic')

module.exports = (req, res, handleError) => {
    const { params: { userId } } = req

    try {
        retrieveUserImage(userId)
            .then(stream => {
                res.setHeader('Content-type', 'image/jpeg')

                stream.pipe(res)

                stream.on('error', handleError)
            })
    } catch (error) {
        handleError(error)
    }
}