const { Router } = require('express')
const router = new Router()

// middlewares
const { cookieParser, cookieSession, urlencodedBodyParser } = require('../../middlewares/indexer')

// error handling logic
const withErrorHandling = require('./helpers/with-error-handling')

// web handlers
const {
  handleGoToRegister,
  handleRegister,
  handleGoToLogin,
  handleLogin,
  handleGoToHome,
  handleLogout,
  handleGoToSearch,
  handleGoToDetail
} = require('./handlers/indexer')


// register form, 'get' method.
router.get('/register', cookieParser, cookieSession, withErrorHandling(handleGoToRegister))

// register form, post method to send user data
router.post('/register', urlencodedBodyParser, cookieParser, cookieSession, withErrorHandling(handleRegister))
/*
const withErrorHandling = handler =>
    (req, res) =>
        handler(req, res, error => res.status(500).send(`sorry, there was an error :( ERROR: ${error.message}`))

app.get('/login', cookieParser, cookieSession, (req, res) => {
    handleGoToLogin(req, res, error => res.status(500).send(`sorry, there was an error :( ERROR: ${error.message}`))
})
*/

router.get('/login', cookieParser, cookieSession, withErrorHandling(handleGoToLogin))

/*
app.post('/login', cookieParser, cookieSession, urlencodedBodyParser, (req, res) => {
    handleLogin(req, res, error => res.status(500).send(`sorry, there was an error :( ERROR: ${error.message}`))
})
*/

router.post('/login', urlencodedBodyParser, cookieParser, cookieSession, withErrorHandling(handleLogin))

router.get('/', cookieParser, cookieSession, withErrorHandling(handleGoToHome))

router.post('/logout', cookieParser, cookieSession, withErrorHandling(handleLogout))

router.get('/search', cookieParser, cookieSession, withErrorHandling(handleGoToSearch))

router.get('/vehicles/*', cookieParser, cookieSession, withErrorHandling(handleGoToDetail))

module.exports = router

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

