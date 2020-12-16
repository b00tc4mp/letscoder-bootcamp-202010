const { retrievePictureUser } = require('../../../logic')

module.exports = (req, res, handleError) => {

    const { params: { userId } } = req

    try {
        retrievePictureUser(userId)
            .then(stream => {
                res.setHeader('Content-type', 'image/jpeg')

                stream.pipe(res)

                stream.on('error', handleError)
            })
    } catch (error) {
        handleError(error)
    }
}