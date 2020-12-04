const { toggleFoodUserDiet } = require('../../../logic')
// const jwt = require('jsonwebtoken')

// const { env: { JWT_SECRET } } = process

module.exports = (req, res, handleError) => {

    const { headers: { authorization }} = req

    const token = authorization.replace('Bearer ', '')

    const { params: { foodId } } = req

    res.setHeader('Access-Control-Allow-Origin', '*')

    try {
        // const { sub: userId } = jwt.verify(token, JWT_SECRET)
        toggleFoodUserDiet(token, foodId)
        .then(() => res.status(201).send())
        .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}