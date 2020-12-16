const { modifyLive } = require('../../../logic')

module.exports = (req, res, handleError) => {
    const { body: { liveId, title, date, duration, payment, description } } = req

    try {
        modifyLive(liveId, title, date, duration, payment, description)
            .then(() => {
                return res.status(204).send()})
            .catch(handleError)
            } catch (error) {
                handleError(error)
            }
    }