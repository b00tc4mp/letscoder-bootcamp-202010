const express = require('express')
const app = express()
const port = 3000

const urlencodedBodyParser = require('./middlewares/urlencoded-body-parser')

const handleGoToRegister = require('./handlers/handle-go-to-register')
// const urlencodedBodyParserRegister = require('./handlers/urlencoded-body-parser-register')
const handleRegister = require('./handlers/handle-register')
const handleGoToLogin = require('./handlers/handle-go-to-login')
// const urlencodedBodyParserLogin = require('./handlers/urlencoded-body-parser-login')
const handleLogin = require('./handlers/handle-login')
const handleGoToHome = require('./handlers/handle-go-to-home')
const handleLogout = require('./handlers/handle-logout')
const handleNotFound = require('./handlers/handle-not-found')

app.use(express.static('public'))

app.get('/register', handleGoToRegister)

//app.post('/register', urlencodedBodyParserRegister, handleRegister)
app.post('/register', urlencodedBodyParser, handleRegister)

app.get('/login', handleGoToLogin)

//app.post('/login', urlencodedBodyParserLogin, handleLogin)
app.post('/login', urlencodedBodyParser, handleLogin)

app.get('/', handleGoToHome)

app.post('/logout', handleLogout)

app.get('/*', handleNotFound)

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))