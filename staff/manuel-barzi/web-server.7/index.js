const express = require('express')
const app = express()
const port = 3000

const { urlencodedBodyParser, cookieParser, cookieSession } = require('./middlewares')

const {
    handleGoToRegister,
    handleRegister,
    handleGoToLogin,
    handleLogin,
    handleGoToHome,
    handleLogout,
    handleNotFound,
    handleGoToSearch
} = require('./web/handlers')

const {
    handleAcceptCookies
} = require('./api/handlers')

app.use(express.static('public'))

app.get('/register', cookieParser, cookieSession, handleGoToRegister)

app.post('/register', urlencodedBodyParser, handleRegister)

app.get('/login', cookieParser, cookieSession, handleGoToLogin)

app.post('/login', cookieParser, cookieSession, urlencodedBodyParser, handleLogin)

app.get('/', cookieParser, cookieSession, handleGoToHome)

app.post('/logout', cookieParser, cookieSession, handleLogout)

app.get('/search', cookieParser, cookieSession, handleGoToSearch)

// api paths

app.post('/api/accept-cookies', cookieParser, cookieSession, handleAcceptCookies)

app.get('/*', handleNotFound)

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))