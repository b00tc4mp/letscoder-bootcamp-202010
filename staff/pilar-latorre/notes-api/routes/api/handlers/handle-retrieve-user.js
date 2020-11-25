const { retrieveUser } = require('../../../logic')
const jwt = require('jsonwebtoken')

const { env: { JWT_SECRET } } = process

module.exports = (req, res, handleError) => {
    //const { header: { authorization } } = req
    //const token = authorization.replace('Bearer ', '')
    
    const token = req.headers.authorization.replace('Bearer ', '')
 
    try {

        const { sub: id } = jwt.verify(token, JWT_SECRET)

        retrieveUser(id)
        
            .then((user) => res.status(200).json( user ))
            .catch (error => handleError(401, error))
     
        
    } catch (error) {
        handleError(400, error)
    }
}