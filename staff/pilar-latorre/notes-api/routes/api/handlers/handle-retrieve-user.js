const { retrieveUser } = require('../../../logic')


module.exports = (req, res, handleError) => {
    // const { header: { authorization } } = req
    // const token = authorization.replace('Bearer ', '')
    
    const id = req.headers.authorization.replace('Bearer ', '')
 
    res.setHeader('Access-Control-Allow-Origin', '*')

    try {
        retrieveUser(id, (error, user) => {
            if (error) return handleError(401, error) 


            res.status(200).json({ user })
        })
    } catch (error) {
        handleError(400, error)
    }
}