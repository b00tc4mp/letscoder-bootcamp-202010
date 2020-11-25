const { saveNote } = require('../../../logic')
const handleAuthenticateUser = require('./handle-authenticate-user')

module.exports = (req, res, handleError) => {
    const { body: { id, text, tags, visibility }, headers: { authorization } } = req

    const owner = authorization.replace('Bearer ', '')


    try {
        saveNote(id, text, tags, owner, visibility)
        
            .then(() => res.status(201).send())
            .catch(error => handleAuthenticateUser(500, error))
          
        
    } catch (error) {
        handleError(400, error)
    }
}



