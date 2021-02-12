const { retrieveMuscularGroup } = require('../../../logic')

module.exports = (req, res, handleError) => {

    try {
        const { params: { group } } = req

        retrieveMuscularGroup(group)
            .then(movement => res.status(200).json(movement))
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}