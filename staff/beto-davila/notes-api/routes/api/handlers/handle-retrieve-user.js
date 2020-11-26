const { retrieveUser } = require('../../../logic')
const jwt = require('jsonwebtoken')

const { env: { JWT_SECRET } } = process

module.exports = (req, res, handleError) => {

    const { headers: { authorization } } = req
    // Bearer <token>
    const token = authorization.replace('Bearer ', '')
    
    //const token = '1605718707109104439437083615920'

    res.setHeader('Access-Control-Allow-Origin', '*')

    try {
        const { sub: userId } = jwt.verify(token, JWT_SECRET)
        retrieveUser(userId)
        .then(user => res.status(200).json(user))
        .catch(handleError)

        } catch (error) {
            handleError(error)   
        }
}