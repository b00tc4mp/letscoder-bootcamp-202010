const { retrieveMuscularGroup } = require('../../../logic')

module.exports = (req, res, handleError) => {

    const { params: { group } } = req

    try {
        retrieveMuscularGroup(group)
            .then(movement => res.status(200).json(movement))
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}