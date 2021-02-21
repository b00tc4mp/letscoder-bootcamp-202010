const { modifyUser } = require('../../../logic')
const jwt = require('jsonwebtoken')

const { env: { JWT_SECRET } } = process

module.exports =( req, res, handleError) => {
    const { body: { fullname, contact, phone, city }, headers: { authorization  }} = req

    const token = authorization.replace('Bearer ', '')
    try {
        const { sub: userId }= jwt.verify(token, JWT_SECRET)       
        modifyUser(userId, fullname, contact, phone, city)
        .then(user => res.status(200).json(user))
        .catch(handleError)
    }catch(error) {
        handleError(error)
    }
}