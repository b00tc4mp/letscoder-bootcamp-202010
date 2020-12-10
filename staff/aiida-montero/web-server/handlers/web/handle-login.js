const authenticateUser = require('../../logic/authenticate-user')

module.exports = (req, res, handleError) => {
  const {body : {email, password}} = req

  authenticateUser(email, password, (error, userId) =>{
      if(error)
      res.render('login', {feedback: error.message, cookiesAccepted}, (error, html) => {
        if(error) return handleError(error)
        res.send(html)
      })

      const {session} = req

      session.userId = userId

      session.save(error => {
        if(error) return handleError(error)
        res.redirect('/')
      })

  })
}