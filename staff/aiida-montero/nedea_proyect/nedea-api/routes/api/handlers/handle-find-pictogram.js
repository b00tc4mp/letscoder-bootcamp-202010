const { findPictogram } = require('../../../logic')




module.exports = (req, res, handleError) => {
    const {query: {search}} = req


    try {
        findPictogram(search)
            .then((response) =>res.status(200).json(response))
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}