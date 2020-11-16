const express = require('express')
const app = express()
const port = 3000


const urlencodedBodyParser = require('./middlewares/urlencoded-body-parser')
const cookieParser = require('./middlewares/cookie-parser')

const {
handleGoToRegister,
handleRegister,
handleGoToLogin,
handleLogin,
handleGoToHome,
handleLogout,
handleNotFound,
handleGoToSearch,

}= require('./web/handlers')

const {
    handleAcceptCookies
} = require('./api/handlers')

app.use(express.static('public'))

app.get('/register', cookieParser, handleGoToRegister )

app.post('/register', urlencodedBodyParser, handleRegister)

app.get('/login', cookieParser, handleGoToLogin)

app.post('/login',cookieParser, urlencodedBodyParser, handleLogin)

app.get('/', cookieParser, handleGoToHome)

app.post('/logout', handleLogout)

app.get('/search', cookieParser, handleGoToSearch)


//api paths

app.post('/api/accept-cookies',cookieParser, handleAcceptCookies)

app.get('/*', handleNotFound)

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))













