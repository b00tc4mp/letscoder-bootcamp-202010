const { findOffer } = require('../../../logic')


module.exports = (req, res, handleError) => {
    const { body: { titleoffer, offername, price } } = req

    try {
        
        findOffer(titleoffer, offername, price)
        .then(offer => res.status(200).json(offer))
        .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}