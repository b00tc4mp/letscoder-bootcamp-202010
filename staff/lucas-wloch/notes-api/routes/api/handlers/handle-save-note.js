const saveNote = require("../../../logic/save-note")
const jwt = require('jsonwebtoken')


const { env: { JWT_SECRET } } = process

module.exports = (req, res, handleError) => {
    const { body: { id, text, tags, visibility }, headers: { authorization } } = req

    const token = authorization.replace('Bearer ','')
    debugger
    const { sub: userId } = jwt.verify(token, JWT_SECRET)

    try {
        saveNote(id, text, tags, userId, visibility)
            .then(() => res.status(201).send())
            .catch(error => handleError(500, error))
    } catch (error) {
        handleError(400, error)
    }
}


