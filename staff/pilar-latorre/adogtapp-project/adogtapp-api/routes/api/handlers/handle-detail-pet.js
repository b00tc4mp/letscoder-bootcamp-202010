const { detailPet } = require('../../../logic')

module.exports = (req, res, handleError) => {

    const { params: {petId} } = req
   
    try {
        detailPet(petId)
            .then(pet => res.status(200).json(pet))
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}