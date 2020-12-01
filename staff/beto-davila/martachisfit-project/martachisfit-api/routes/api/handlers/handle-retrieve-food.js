const { retrieveFood } = require('../../../logic')

const jwt = require('jsonwebtoken')

const { env: { JWT_SECRET } } = process

module.exports = (req, res) => {
    
    const { headers: { authorization }} = req

    const token = authorization.replace('Bearer ', '')

    try {
        const { sub: userId } = jwt.verify(token, JWT_SECRET)
        retrieveFood(userId)
            .then(user => res.status(200).json(user.savedFood))
            .catch(console.error)
    } catch (error) {
        console.error(error.message)
    }
}