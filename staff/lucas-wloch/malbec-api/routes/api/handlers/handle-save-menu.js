const saveMenu = require("../../../logic/save-menu")
const jwt = require('jsonwebtoken')

const { env: { JWT_SECRET } } = process

module.exports = (req, res, handleError) => {
    const { headers: { authorization } } = req

    const token = authorization.replace('Bearer ', '')

    const { sub: userId } = jwt.verify(token, JWT_SECRET)


    debugger
    try {
        saveMenu(userId)
            .then((menuId) => res.status(200).send({menuId}))
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}