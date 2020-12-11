const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
const path = require('path')
const authenticateUser = require('./logic/authenticate-user')
const retrieveUser = require('./logic/retrieve-user')
const registerUser = require('./logic/register-user')

let session

app.use(express.static('public'))

const handleGoToRegister = (req, res) => {
    if (!session)
        fs.readFile(path.join(__dirname, './views/register.html'), 'utf8', (error, content) => {
            if (error) return res.send(`sorry, there was an error :( ERROR: ${error.message}`)

            res.send(content)
        })
    else res.redirect('/')
}

app.get('/register', handleGoToRegister)

const urlencodedBodyParserRegister = (req, res, next) => {
    req.setEncoding('utf8')

    let content = ''

    req.on('data', chunk => content += chunk)

    req.on('end', () => {
        // fullname=gato+perro&email=gatoperro%40mail.com&password=123123123

        const parts = content.split('&')

        let [, fullname] = parts[0].split('=')
        let [, email] = parts[1].split('=')
        let [, password] = parts[2].split('=')

        fullname = fullname.split('+').join(' ')

        email = decodeURIComponent(email)

        password = decodeURIComponent(password)

        const body = { fullname, email, password }

        req.body = body

        next()
    })
}

const handleRegister = (req, res) => {
    const { body: { fullname, email, password } } = req

    registerUser(fullname, email, password, error => {
        if (error)
            return fs.readFile(path.join(__dirname, './views/error.html'), 'utf8', (error, content) => {
                if (error) return res.send(`sorry, there was an error :( ERROR: ${error.message}`)

                res.send(content)
            })

        fs.readFile(path.join(__dirname, './views/register-confirm.html'), 'utf8', (error, content) => {
            if (error) return res.send(`sorry, there was an error :( ERROR: ${error.message}`)

            res.send(content)
        })
    })
}

app.post('/register', urlencodedBodyParserRegister, handleRegister)

const handleGoToLogin = (req, res) => {
    if (!session)
        fs.readFile(path.join(__dirname, './views/login.html'), 'utf8', (error, content) => {
            if (error) return res.send(`sorry, there was an error :( ERROR: ${error.message}`)

            res.send(content)
        })
    else res.redirect('/')
}

app.get('/login', handleGoToLogin)

const urlencodedBodyParserLogin = (req, res, next) => {
    debugger
    req.setEncoding('utf8')

    let content = ''

    req.on('data', chunk => {
        //console.log(chunk)

        content += chunk
    })

    req.on('end', () => {
        // email=manuelbarzi%40gmail.com&password=123123123

        const parts = content.split('&')

        let [, email] = parts[0].split('=')
        let [, password] = parts[1].split('=')

        email = decodeURIComponent(email)

        password = decodeURIComponent(password)

        const body = { email, password }

        req.body = body

        next()
    })
}

const handleLogin = (req, res) => {
    const { body: { email, password }} = req

    authenticateUser(email, password, (error, userId) => {
        if (error)
            return fs.readFile(path.join(__dirname, './views/error.html'), 'utf8', (error, content) => {
                if (error) return res.send(`sorry, there was an error :( ERROR: ${error.message}`)

                res.send(content)
            })

        session = userId

        res.redirect('/')
    })
}

app.post('/login', urlencodedBodyParserLogin, handleLogin)

const handleGoToHome = (req, res) => {
    if (session)
        retrieveUser(session, (error, user) => {
            if (error)
                return fs.readFile(path.join(__dirname, './views/error.html'), 'utf8', (error, content) => {
                    if (error) return res.send(`sorry, there was an error :( ERROR: ${error.message}`)

                    res.send(content)
                })

            fs.readFile(path.join(__dirname, './views/home.html'), 'utf8', (error, content) => {
                if (error) return res.send(`sorry, there was an error :( ERROR: ${error.message}`)

                res.send(content.replace('{fullname}', user.fullname))
            })
        })
    else res.redirect('/login')
}

app.get('/', handleGoToHome)

const handleLogout = (req, res) => {
    session = undefined

    res.redirect('/login')
}

app.post('/logout', handleLogout)

const handleNotFound = (req, res) => {
    fs.readFile(path.join(__dirname, './views/not-found.html'), 'utf8', (error, content) => {
        if (error) return res.send(`sorry, there was an error :( ERROR: ${error.message}`)

        res.status(404).send(content)
    })
}

app.get('/*', handleNotFound)

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))