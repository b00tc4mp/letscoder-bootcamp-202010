const { retrieveNotes } = require('../../../logic')


module.exports = (req, res, handleError) => {
    
    const id = req.headers.authorization.replace('Bearer ', '')


    try {
        retrieveNotes(id)
        
            .then((notes) => res.status(200).json( notes ))
            .catch(error => handleError(401, error) )
         
 
        
    } catch (error) {
        handleError(400, error)
    }
}