//const session = require('./session')

module.exports = (req, res, handleError) => {
    //delete session.userId
    const { session } = req

    session.destroy(error => {
        if (error) return handleError(error)
        
        // header setup for the cookie to expire at the moment when the user log out
        res.setHeader('set-cookie', `session-id=NO-SESSION; max-age: 0; expires=${new Date().toUTCString()}`)
    
        res.redirect('/login')
        
    })

}