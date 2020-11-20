const { retrieveUser } = require('../../../logic')

module.exports = (req, res, handleError) => {

    debugger

    res.setHeader('Access-Control-Allow-Origin', '*')

    const id = req.headers.authorization.replace('Bearer ', '')


    try {
        retrieveUser(id, (error, user) => {
            if (error) return handleError(401, error)

            res.status(200).json({ user })
        })
    } catch (error) {
        handleError(400, error)
    }
}
