const { modifyUser } = require('../../../logic')
const jwt = require('jsonwebtoken')

const { env: { JWT_SECRET, JWT_EXP }} = process

module.exports =( req, res, handleError) => {
    const { body: { changes }} = req

    try{

        modifyUser(changes)
            .then(userId => {
                const changes= 

                res.status(204).json({ token })
            })

            .catch(handleError)
    } catch(error) {

    }
}