module.exports = (req, res, handleError) => {

   const {session} = req

   session.destroy(error => {
       if (error) return handleError(error)

       res.setHeader('set-cookie', `session-id=NO-SESSION; max-age: 0; expires=${new Date().toUTCString()}`)
       
       res.redirect('/login')
   })

}