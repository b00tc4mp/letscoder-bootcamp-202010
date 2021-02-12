const { retrievePictureUser } = require('../../../logic')

module.exports = (req, res, handleError) => {

    try {
        const { params: { userId } } = req

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