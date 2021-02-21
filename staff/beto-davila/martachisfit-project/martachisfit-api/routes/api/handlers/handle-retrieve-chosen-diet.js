const { retrieveChosenDiet } = require('../../../logic')

const jwt = require('jsonwebtoken')

const { env: { JWT_SECRET } } = process

module.exports = (req, res, handleError) => {

    try {
        const { headers: { authorization }, params: { dietType } } = req

        const token = authorization.replace('Bearer ', '')
        debugger
        const { sub: userId } = jwt.verify(token, JWT_SECRET)
        retrieveChosenDiet(userId, dietType)
            .then(result => res.status(200).json(result))
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}