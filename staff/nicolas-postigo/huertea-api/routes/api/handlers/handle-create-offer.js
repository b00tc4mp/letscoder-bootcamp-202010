const { createOffer } = require('../../../logic/')

module.exports = (req, res, handleError) => {
    const { body: { offername, titleoffer, image } } = req

    try {
        createOffer(offername, titleoffer, image)
            .then(() => res.status(201).send())
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}