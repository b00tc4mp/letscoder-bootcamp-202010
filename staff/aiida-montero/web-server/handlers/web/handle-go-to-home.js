const retrieveUser = require ('../../logic/retrieve-user')

module.exports = (req, res, handleError) => {
   const { session: {userId} } = req

   if(userId)
      retrieveUser(userId, (error, user) => {
          if (error) handleError(error)
           const {fullname} = user
            res.render('home',{fullname}, (error,html) => {
            if(error) return handleError (error)
            
            res.send(html)
          })
          

        
      })
   else res.redirect('/login')
}