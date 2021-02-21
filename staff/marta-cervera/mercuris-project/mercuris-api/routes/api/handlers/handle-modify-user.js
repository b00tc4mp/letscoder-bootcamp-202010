const { modifyUser } = require('../../../logic')
const jwt = require('jsonwebtoken')

const { env: { JWT_SECRET, JWT_EXP }} = process

module.exports =( req, res, handleError) => {
    const { body: { name, contact, address, city, phone }, headers: { authorization}} = req

    const token = authorization.replace('Bearer ', '')

    try {
        const { sub: userId }= jwt.verify(token, JWT_SECRET)
               
        modifyUser(userId, name, contact, address, city, phone)
        .then(user => res.status(200).json(user))
        .catch(handleError)

    }catch(error) {
        handleError(error)
    }
}

