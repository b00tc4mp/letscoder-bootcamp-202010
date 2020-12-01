const { createOffer } = require('../../../logic/')

module.exports = (req, res, handleError) => {
    const { body: { update } } = req

    try {
        createOffer(update)
            .then(() => res.status(201).send())
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}