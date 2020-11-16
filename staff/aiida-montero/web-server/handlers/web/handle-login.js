const fs = require('fs')
const path = require('path')
const authenticateUser = require('../../logic/authenticate-user')

module.exports = (req, res) => {
  const {body : {email, password}} = req

  authenticateUser(email, password, (error, userId) =>{
      if(error)
      return fs.readFile(path.join(__dirname, '../../views/error.html'), 'utf8', (_error, content) => {
           if(_error) return res.send(`sorry, there was an error : (ERROR: ${_error.message}`)

           res.send(content.replace('{message}', error.message))
      })

      const {session} = req

      session.userId = userId

      session.save(error => {
        if(error) return res.status(500).send(`sorry, there was an error :( ERROR: ${_error.message}`)
      })

      res.redirect('/')
  })
}