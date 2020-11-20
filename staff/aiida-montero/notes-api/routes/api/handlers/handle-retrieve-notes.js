const { retrieveNotes} = require('../../../logic')

module.exports = (req, res, handleError) => {
    
    const{ headers: { authorization }} = req

    const userId = authorization.replace('Bearer ', '')

    res.setHeader('Access-Control-Allow-Origin', '*')

    try {
        retrieveNotes(userId, (error,note) =>{
        if (error) return handleError(401, error)

        res.status(200).json(note)
        })
    } catch (error) {
        handleError(400, error)
    }
}