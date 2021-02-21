const { followUser } = require('../../../logic')
const jwt = require('jsonwebtoken')


const { env: { JWT_SECRET } } = process


module.exports = (req, res, handleError) => {
    
    const { body: { followId  }, headers: { authorization } } = req
    
    const token = authorization.replace('Bearer ','')
    
    const { sub: userId } = jwt.verify(token, JWT_SECRET)



    try {
        followUser(userId, followId )
            .then(result => res.status(200).send())
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}
