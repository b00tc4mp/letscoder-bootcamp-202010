const { addFoodUserDiet } = require('../../../logic')
const jwt = require('jsonwebtoken')

const { env: { JWT_SECRET } } = process

module.exports = (req, res, handleError) => {

    try {
        const { headers: { authorization } } = req

        const token = authorization.replace('Bearer ', '')

        const foodId = req.body.savedFood[0]

        // res.setHeader('Access-Control-Allow-Origin', '*')
        const { sub: userId } = jwt.verify(token, JWT_SECRET)

        addFoodUserDiet(userId, foodId)
            .then(() => res.status(201).send())
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}