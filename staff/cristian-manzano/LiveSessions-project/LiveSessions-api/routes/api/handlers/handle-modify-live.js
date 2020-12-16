const { modifyLive } = require('../../../logic')
debugger
module.exports = (req, res, handleError) => {
    const { body: { liveId, title, liveDate, duration, payment, description } } = req
    debugger
    try {
        modifyLive(liveId, title, liveDate, duration, payment, description)
            .then(() => {
                return res.status(204).send()})
            .catch(handleError)
            } catch (error) {
                handleError(error)
            }
    }