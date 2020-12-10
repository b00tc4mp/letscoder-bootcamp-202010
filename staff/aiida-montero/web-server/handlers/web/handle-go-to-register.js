module.exports = (req, res, handleError) => {
   const{ session: {userId, cookiesAccepted}} = req

   if (!userId)
      res.render('register', { fedback : '', cookiesAccepted}, (error, html)=> {
         if (error) handleError (error)

         res.send(html)

      })
      else res.redirect('/')

}