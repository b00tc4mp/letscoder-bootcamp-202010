const express = require('express') // bring express module
const app = express()
const port = 3000

const { cookieParser, cookieSession, urlencodedBodyParser } = require('./middlewares/indexer')

const withErrorHandling = require('./handlers/web/helpers/with-error-handling')

// destructuring of indexer.js 
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
} = require('./handlers/web/indexer')

const { handleAcceptCookies } = require ('./handlers/api')

// static files service (images, css, jsx files...). 'use' runs in all routes
app.use(express.static('public'))

// register form, 'get' method.
app.get('/register', cookieParser, cookieSession, withErrorHandling(handleGoToRegister))

// register form, post method to send user data
app.post('/register', urlencodedBodyParser, withErrorHandling(handleRegister))
/*
const withErrorHandling = handler =>
    (req, res) =>
        handler(req, res, error => res.status(500).send(`sorry, there was an error :( ERROR: ${error.message}`))


app.get('/login', cookieParser, cookieSession, (req, res) => {
    handleGoToLogin(req, res, error => res.status(500).send(`sorry, there was an error :( ERROR: ${error.message}`))
})
*/

app.get('/login', cookieParser, cookieSession, withErrorHandling(handleGoToLogin))

/*
app.post('/login', cookieParser, cookieSession, urlencodedBodyParser, (req, res) => {
    handleLogin(req, res, error => res.status(500).send(`sorry, there was an error :( ERROR: ${error.message}`))
})
*/

app.post('/login', urlencodedBodyParser, cookieParser, cookieSession, withErrorHandling(handleLogin))

app.get('/', cookieParser, cookieSession, withErrorHandling(handleGoToHome))

app.post('/logout', cookieParser, cookieSession, withErrorHandling(handleLogout))

app.get('/search', cookieParser, cookieSession, withErrorHandling(handleGoToSearch))

app.get('/vehicles/*', cookieParser, cookieSession, withErrorHandling(handleGoToDetail))

//api route that handles the accept-cookies logic
app.post('/api/accept-cookies', cookieParser, cookieSession, handleAcceptCookies)

app.get('/*', withErrorHandling(handleNotFound))

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

