const { searchUserFullname } = require('../../../logic')
const jwt = require('jsonwebtoken')


const { env: { JWT_SECRET } } = process
module.exports = (req, res, handleError) => {
    const { body: { query }, headers: { authorization }} = req
    
    const token = authorization.replace('Bearer ','')
    
    
    try {
        const payload = jwt.verify(token, JWT_SECRET)
        searchUserFullname(query)
            .then(results => res.status(200).json(results))
            .catch(error => handleError(204, error))
    } catch (error) {
        handleError(400, error)
    }
}
