const fs = require('fs')
const path = require('path')
const retrieveUser = require('../../logic/retrieve-user')


module.exports = (req, res, handleError) => {
    const { session: { userId } } = req

    if(userId)
        retrieveUser(userId, (error, user) => {
            if (error) return handleError(error)

            fs.readFile(path.join(__dirname, '../../views/home.html'), 'utf8', (error, content) => {
                if (error) return handleError(error)
                    
                res.send(content.replace('{fullname}', user.fullname))
        
            })
            
        })
        
        else res.redirect('/login')
}

