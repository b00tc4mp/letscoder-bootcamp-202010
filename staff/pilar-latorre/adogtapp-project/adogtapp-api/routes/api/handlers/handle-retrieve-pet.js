const { retrievePet } = require('../../../logic')

module.exports = (req, res, handleError) => {

    const { params: {petId} } = req
   
    
    try {
        retrievePet(petId)
            .then(pet => res.status(200).json(pet))
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}