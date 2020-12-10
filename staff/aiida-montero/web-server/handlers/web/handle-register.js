const registerUser = require('../../logic/register-user')

module.exports = (req, res, handleError) => {
    const {body: {fullname, email, password }, session : {cookiesAcepted }} = req
   
    registerUser(fullname, email, password, error => {
      if(error)
           res.render('register', {feedback: error.message, cookiesAcepted} ,(_error, html) => {
           if (_error) handleError(_error)

           res.send(html)
       


     })
          res.render('register-confirm', (error, html) => {
          if (error) return handleError(error)

          res.send(html)
      })
      
    })
     
}