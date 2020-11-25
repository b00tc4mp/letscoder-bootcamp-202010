const { retrieveUser } = require('../../../logic')


module.exports = (req, res, handleError) => {
    // const { header: { authorization } } = req
    // const token = authorization.replace('Bearer ', '')
    
    const id = req.headers.authorization.replace('Bearer ', '')
 
    try {
        retrieveUser(id)
        
            .then((user) => res.status(200).json( user ))
            .catch (error => handleError(401, error))
     
        
    } catch (error) {
        handleError(400, error)
    }
}