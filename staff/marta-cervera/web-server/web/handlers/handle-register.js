const fs = require('fs')
const path = require('path')
const registerUser = require ('../../logic/register-user')

//const session = require()

module.exports = (req, res) =>{
   const { body: { fullname, email, password}} = req


registerUser(fullname, email, password, error => {
    if(error)
    return fs.readFile(path.join(__dirname, '../../views/error.html'), 'utf8', (__error, content) =>{
        if (__error) return res.send(`sorry,there was an error :( ERROR: ${__error.message}`)

        res.send(content.repalce('{message}', error.message))
    })
    fs.readFile(path.join(__dirname, '../../views/register-confirm.html'), 'utf8', (__error, content)=>{
        if (error) return res.send(`sorry, there was an error :( ERROR ${error.message}`)

        res.send(content)
    })

})
}










/* app.post('/register', (req, res)=> {
    
  
   
      fs.writerFile(`./data/users/${id}.json`, json, error =>{
        if(error) return res.send(`sorry, there was an error :( ERROR: ${error.message}`)
  
        res.send(`ok, user registered ,) ID: ${id}`)
      })
    })
   */