const { retrieveNotes } = require('../../../logic')
const jwt = require('jsonwebtoken')

const { env: { JWT_SECRET } } = process


module.exports = (req, res, handleError) => {

    const { headers: { authorization } } = req
    
    const token = authorization.replace('Bearer ', '')


    try {

        const { sub: id } = jwt.verify(token, JWT_SECRET)
        retrieveNotes(id)
        
            .then((notes) => res.status(200).json( notes ))
            .catch(handleError)
         
 
        
    } catch (error) {
        handleError(error)
    }
}