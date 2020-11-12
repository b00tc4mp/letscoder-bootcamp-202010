const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
const path = require('path')
const authenticateUser = require('./logic/authenticate-user')
const retrieveUser = require('./logic/retrieve-user')
const registerUser = require('./logic/register-user')

let session

app.get('/register', (req, res) => {
    if (!session)
        fs.readFile(path.join(__dirname, './views/register.html'), 'utf8', (error, content) => {
            if (error) return res.send(`sorry, there was an error :( ERROR: ${error.message}`)

            res.send(content)
        })
    else res.redirect('/')
})

app.post('/register', (req, res) => {
    debugger
    req.setEncoding('utf8')

    let content = ''

    req.on('data', chunk => {
        //console.log(chunk)

        content += chunk // content = content + chunk
    })

    req.on('end', () => {
        debugger

        const parts = content.split('&')

        let [, fullname] = parts[0].split('=')
        let [, email] = parts[1].split('=')
        let [, password] = parts[2].split('=')

        fullname = fullname.split('+').join(' ')

        email = decodeURIComponent(email)

        password = decodeURIComponent(password)

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
    })
})

app.get('/login', (req, res) => {
    if (!session)
        fs.readFile(path.join(__dirname, './views/login.html'), 'utf8', (error, content) => {
            if (error) return res.send(`sorry, there was an error :( ERROR: ${error.message}`)

            res.send(content)
        })
    else res.redirect('/')
})

app.post('/login', (req, res) => {
    debugger
    req.setEncoding('utf8')

    let content = ''

    req.on('data', chunk => {
        //console.log(chunk)

        content += chunk
    })

    req.on('end', () => {
        const parts = content.split('&')

        let [, email] = parts[0].split('=')
        let [, password] = parts[1].split('=')

        email = decodeURIComponent(email)

        password = decodeURIComponent(password)

        authenticateUser(email, password, (error, userId) => {
            if (error)
                return fs.readFile(path.join(__dirname, './views/error.html'), 'utf8', (error, content) => {
                    if (error) return res.send(`sorry, there was an error :( ERROR: ${error.message}`)

                    res.send(content)
                })

            session = userId

            res.redirect('/')
        })
    })
})

app.get('/', (req, res) => {
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
})

//app.get('/logout', (req, res) => { // WARN don't do procedures like this with GET
app.post('/logout', (req, res) => {
    session = undefined

    res.redirect('/login')
})

app.get('/*', (req, res) => {
    fs.readFile(path.join(__dirname, './views/not-found.html'), 'utf8', (error, content) => {
        if (error) return res.send(`sorry, there was an error :( ERROR: ${error.message}`)

        res.status(404).send(content)
    })
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))