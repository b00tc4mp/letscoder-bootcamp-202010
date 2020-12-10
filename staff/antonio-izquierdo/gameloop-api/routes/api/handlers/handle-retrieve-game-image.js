const { retrieveGameImage } = require('../../../logic')

module.exports = (req, res, handleError) => {
    
    const { params: { gameId } } = req

    try {
        retrieveGameImage(gameId)
            .then(stream => {
                res.setHeader('Content-type', 'image/jpeg')

                stream.pipe(res)

                stream.on('error', handleError)
            })
    } catch (error) {
        handleError(error)
    }
} 