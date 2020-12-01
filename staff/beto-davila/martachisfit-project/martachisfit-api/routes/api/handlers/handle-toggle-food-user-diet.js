const { toggleFoodUserDiet } = require('../../../logic')
const jwt = require('jsonwebtoken')

const { env: { JWT_SECRET } } = process

module.exports = (req, res) => {

    const { headers: { authorization }} = req

    const token = authorization.replace('Bearer ', '')

    const { params: { foodId } } = req

    res.setHeader('Access-Control-Allow-Origin', '*')

    try {
        const { sub: userId } = jwt.verify(token, JWT_SECRET)
        toggleFoodUserDiet(userId, foodId)
        .then(() => res.status(201).send())
        .catch(console.error)
    } catch (error) {
        console.error(error.message)
    }
}