const saveMenu = require("../../../logic/save-menu")
const jwt = require('jsonwebtoken')

const { env: { JWT_SECRET } } = process

module.exports = (req, res, handleError) => {
    const { body: { menu }, headers: { authorization } } = req

    const token = authorization.replace('Bearer ', '')

    const { sub: userId } = jwt.verify(token, JWT_SECRET)


    debugger
    try {
        saveMenu(userId, menu)
            .then((menuId) => res.status(204).send({menuId}))
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}