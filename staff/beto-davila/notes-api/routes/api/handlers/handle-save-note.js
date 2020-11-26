const { saveNote } = require('../../../logic')
const jwt = require('jsonwebtoken')

const { env: { JWT_SECRET } } = process

module.exports = (req, res, handleError) => {

    const { headers: { authorization }, body: { id, text, tags, visibility } } = req

    res.setHeader('Access-Control-Allow-Origin', '*')

    const token = authorization.replace('Bearer ', '')

    try {
        const { sub: ownerId } = jwt.verify(token, JWT_SECRET)
        saveNote(ownerId, id, text, tags, visibility)
        .then(() => res.status(200).send()) 
        .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}



