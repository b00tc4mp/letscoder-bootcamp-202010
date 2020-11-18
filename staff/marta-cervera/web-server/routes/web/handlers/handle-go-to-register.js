const fs = require('fs')
const path = require('path')

//const session = require('./session')

module.exports = (req, res, handleError ) => {

    const { session: { userId, cookiesAccepted }} = req

    if(!userId)
    
    fs.readFile(path.join(__dirname, '../../views/register.html'), 'utf8', (error, content) => {
        if (error) return handleError(error)

        res.send(content.replace('{cookiesAccepted}', cookiesAccepted))
    })
    else res.redirect('/')
}









   /* app.get('/register', (req, res)=> {
    fs.readFile('./public/register/index.html', 'utf8', (error, content)=> {
      if (error) return res.send(`sorry, there was an error :( ERROR: ${error.message}`)
  
      res.send(content)
    }) //lectura del fichero del index html, el template. fs (file syste,. sistema de archivos)
  })
   */
  // res.send(`sorry, there was an error :( ERROR: ${error.message}`)