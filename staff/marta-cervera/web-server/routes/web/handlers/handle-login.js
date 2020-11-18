const { authenticateUser } = require('../../../logic')

module.exports = (req, res, handleError) => {
    const { body: { email, password }, session: { cookiesAccepted } } = req

    authenticateUser(email, password, (error, userId) => {
        if (error)
            return res.render('login', { cookiesAccepted, feedback: error.message }, (error, html) => {
                if (error) return handleError(error)

                res.send(html)
            })

        const { session } = req

        session.userId = userId

        session.save(error => {
            if (error) return handleError(error)

            res.redirect('/')
        })

    })
}

        
        
    
        









/* 
app.get('/login', (req, res)=> {
    fs.readFile('./public/login/index.html', 'utf8', (error, content)=> {
      if(error) return res.send(`sorry, there was an error :( ERROR: ${error.message}`)
  
      res.send(content)
    })
  }) 
  else{
            
            res.setHeader('set-cookie', `session-id=${userId}; expires=${new Date(Date.now() + 60 * 60 * 1000).toUTCString()}`)
        
            res.redirect('/')
  
  
  */

//  res.send(`sorry, there was an error :( ERROR: ${_error.message}`)
