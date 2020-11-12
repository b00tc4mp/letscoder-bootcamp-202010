const express = require('express') // bring express module
const app = express()
const port = 3000

const cookieParser = require('./middlewares/cookie-parser')
const urlencodedBodyParser = require ('./middlewares/urlencoded-body-parser')

const handleGoToHome = require('./handlers/handle-go-to-home')
const handleGoToRegister = require('./handlers/handle-go-to-register')
const handleRegister = require('./handlers/handle-register')
const handleGoToLogin = require ('./handlers/handle-go-to-login')
const handleLogin = require ('./handlers/handle-login')
const handleLogout = require('./handlers/handle-logout')
const handleNotFound = require('./handlers/handle-not-found')

app.use(express.static('public'))


/*
app.get('/helloworld', (req, res) => {

  //res.set('Content-type', 'text/plain')
  //res.set('Access-Control-Allow-Origin', '*')
  //res.send(`<h1 style="color:greenYellow;text-align:center;background-color:blue">Hello World!</h1>`)
  
  // Asynchronously reads the entire content of a file. @params(path, encoding for the result)
  fs.readFile(path.join(__dirname + './public/helloworld/index.html'), 'utf-8', (error, content) => {
    if (error) return res.send(`sorry, found error :( ERROR: ${error.message}`);

    res.send(content);
  })
})
*/

// register form, 'get' method.
app.get('/register', cookieParser, handleGoToRegister)

// register form, post method to send user data
app.post('/register', urlencodedBodyParser, handleRegister)

app.get('/login', cookieParser, handleGoToLogin)

app.post('/login', urlencodedBodyParser, handleLogin)

app.get('/', cookieParser, handleGoToHome)

app.post('/logout', handleLogout)

app.get('/*', handleNotFound)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})