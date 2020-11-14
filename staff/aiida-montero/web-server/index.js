const express = require('express')
const app = express()
const port = 3000

const urlencodeBodyParser = require('./middlewares/urlencoded-body-parser')
const cookieParser = require('./middlewares/cookie-parser')

const handleGoToRegister = require ('./handlers/handle-go-to-register')
const handleRegister = require('./handlers/handle-register')
const handleGoToLogin = require('./handlers/handle-go-to-login')
const handleLogin = require('./handlers/handle-login')
const handleGoToHome = require ('./handlers/handle-go-to-home')
const handleLogout = require('./handlers/handle-logout')
const handleNotFound = require('./handlers/handle-not-founds')

const handleAcceptCookies = require('./api/handlers/handle-accept-cookies')

app.use(express.static('public'))

app.get('/register', cookieParser, handleGoToRegister)

app.post('/register', urlencodeBodyParser, handleRegister)

app.get('/login', cookieParser, handleGoToLogin)

app.post('/login', cookieParser, urlencodeBodyParser, handleLogin )

app.get('/', cookieParser, handleGoToHome )

app.post('/logout', handleLogout)

app.post('/api/accept-cookies', cookieParser, handleAcceptCookies)

app.get('/*', handleNotFound)

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))