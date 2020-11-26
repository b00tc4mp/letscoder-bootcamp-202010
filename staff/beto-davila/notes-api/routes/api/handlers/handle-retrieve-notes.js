const { retrieveNotes } = require('../../../logic')
const jwt = require('jsonwebtoken')

const { JWT_SECRET } = process.env

module.exports = (req, res, handleError) => {

    const { headers: { authorization } } = req
    // Bearer <token>
    const token = authorization.replace('Bearer ', '')
    

    res.setHeader('Access-Control-Allow-Origin', '*')

    try {
        const { sub: userId } = jwt.verify(token, JWT_SECRET)

        retrieveNotes(userId)
        .then(notes => res.status(200).json(notes))
        .catch(handleError)
        } catch (error) {
            handleError(error)   
        }
}