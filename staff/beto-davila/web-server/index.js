const express = require('express') // bring express module
const app = express()
const port = 3000

const cookieParser = require('./middlewares/cookie-parser')
const urlencodedBodyParser = require ('./middlewares/urlencoded-body-parser')

// destructuring of index.js 
const {
  handleGoToRegister,
  handleRegister,
  handleGoToLogin,
  handleLogin,
  handleGoToHome,
  handleLogout,
  handleNotFound,
  handleGoToSearch,
  handleGoToDetail
} = require('./web/handlers')

const { handleAcceptCookies } = require ('./api/handlers')

// static files service (images, css, jsx files...)
app.use(express.static('public'))

// register form, 'get' method.
app.get('/register', cookieParser, handleGoToRegister)

// register form, post method to send user data
app.post('/register', urlencodedBodyParser, handleRegister)

app.get('/login', cookieParser, handleGoToLogin)

app.post('/login', urlencodedBodyParser, cookieParser, handleLogin)

app.get('/', cookieParser, handleGoToHome)

app.post('/logout', handleLogout)

app.get('/search', cookieParser, handleGoToSearch)

app.get('/vehicles/*', cookieParser, handleGoToDetail)

//api paths
app.post('/api/accept-cookies', cookieParser, handleAcceptCookies)

app.get('/*', handleNotFound)

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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

