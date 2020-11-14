const express = require('express')
const app = express()
const port = 3000


const urlencodedBodyParser = require('./middlewares/urlencoded-body-parser')
const cookieParser = require('./middlewares/cookie-parser')
const fillTemplate = require('./middlewares/fill-template')

const {
    handleGoToRegister,
    handleRegister,
    handleGoToLogin,
    handleLogin,
    handleGoToHome,
    handleLogout,
    handleNotFound
} = require('./web/handlers')

const {
    handleAcceptCookies
} = require('./api/handlers')



app.use(express.static('public'))

//prueba/////////////////////////
const fs = require('fs')
const path = require('path')
const crearContenido = (req,res,next) => {
    fs.readFile(path.join(__dirname, './views/prueba.html'),'utf8', (error, content) => {
        
        res.changes = { '{name_1}': 'juanita ramirez', '{name_2}': 'carlos sanchez', '{name_3}': 'marta esteras' }
        res.content = content
        next()
    })
} 
app.get('/prueba', crearContenido, fillTemplate)
//prueba////////////////////////


app.get('/register',cookieParser, handleGoToRegister)

app.post('/register', urlencodedBodyParser, handleRegister)

app.get('/login',cookieParser, handleGoToLogin)

app.post('/login',cookieParser, urlencodedBodyParser, handleLogin)

app.get('/',cookieParser, handleGoToHome, fillTemplate)

app.post('/logout', handleLogout)

// api paths

app.post('/api/accept-cookies', cookieParser, handleAcceptCookies)

app.get('/*', handleNotFound)

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))