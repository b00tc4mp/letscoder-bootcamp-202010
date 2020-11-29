const { searchUserFullname } = require('../../../logic')
const jwt = require('jsonwebtoken')


const { env: { JWT_SECRET } } = process
module.exports = (req, res, handleError) => {
    const { body: { query }, headers: { authorization }} = req
    
    const token = authorization.replace('Bearer ','')
    
    
    try {
        const {sub: userId} = jwt.verify(token, JWT_SECRET)
        searchUserFullname(userId, query)
            .then(results => res.status(200).json(results))
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}
