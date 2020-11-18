// const sessions = require('../../sessions')

module.exports = (req, res, handleError) => {
    const { session } = req
    
    if(!session ) return handleError(406, 'could not accept cookies :(')

    session.cookiesAccepted = true

    session.save(error => {
        if(error) return handleError(500, 'could not persist cookie :(')

        res.status(204).send()
    })
    
}





/* 
const { cookies : { 'session-id' : sessionId} } = req

    const session = sessions[sessionId]

    if(!session) return res.status(406).json({ error: 'could not accept cookies :('})

    session.cookiesAccepted = true

    return res.status(204).send() 
    
    
    
    res.status(406).json({ error:'could not accept cookies :(' })*/