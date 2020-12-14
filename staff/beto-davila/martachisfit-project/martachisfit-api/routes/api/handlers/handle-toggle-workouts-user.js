const { toggleWorkoutsUser } = require('../../../logic')
const jwt = require('jsonwebtoken')

const { env: { JWT_SECRET } } = process

module.exports = (req, res, handleError) => {

    const { headers: { authorization }, params: { workoutId } } = req

    const token = authorization.replace('Bearer ', '')

    res.setHeader('Access-Control-Allow-Origin', '*')

    try {
        const { sub: userId } = jwt.verify(token, JWT_SECRET)
        toggleWorkoutsUser(userId, workoutId)
        .then(() => res.status(201).send())
        .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}