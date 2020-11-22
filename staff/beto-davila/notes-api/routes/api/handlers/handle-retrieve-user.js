const { retrieveUser } = require('../../../logic')

module.exports = (req, res, handleError) => {

    const { headers: { authorization } } = req
    // Bearer <token>
    const id = authorization.replace('Bearer ', '')
    
    //const id = '1605718707109104439437083615920'

    res.setHeader('Access-Control-Allow-Origin', '*')

    try {
        retrieveUser(id, (error, user) => {
            if (error) return handleError(401, error)
        
            res.status(200).json(user)
            })
        } catch (error) {
            handleError(400, error)   
        }
}