const { saveNote } = require('../../../logic')
const handleAuthenticateUser = require('./handle-authenticate-user')

module.exports = (req, res, handleError) => {
    const { body: { id, text, tags, visibility }, headers: { authorization } } = req

    const owner = authorization.replace('Bearer ', '')

    res.setHeader('Access-Control-Allow-Origin', '*')

    try {
        saveNote(id, text, tags, owner, visibility, error => {
            if(error) return handleAuthenticateUser(500, error)

            res.status(201).send()

        })
        
    } catch (error) {
        handleError(400, error)
    }
}



