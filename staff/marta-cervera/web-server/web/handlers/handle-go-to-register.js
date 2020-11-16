const fs = require('fs')
const path = require('path')
const sessions = require('../../sessions')
const { createId } = require('../../utils/ids')
const { createSessionCookie } = require('./helpers/cookies')
//const session = require('./session')

module.exports = (req, res) => {

    const { cookies: { 'session-id': sessionId = createId() }} = req

    res.setHeader('set-cookie', createSessionCookie(sessionId))

    const session = sessions[sessionId] || (sessions[sessionId]= {})

    const {userId, cookiesAccepted } = session
    //if (!session.userId)
    if(!userId)
    
    fs.readFile(path.join(__dirname, '../../views/register.html'), 'utf8', (error, content) => {
        if (error) return res.send(`sorry, there was an error :( ERROR: ${error.message}`)

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
  