const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
const path = require('path')
const authenticateUser = require('./logic/authenticate-user')
const retrieveUser = require('')

app.get('/register', (req, res) => {
    fs.readFile(path.join(__dirname, './public/register/index.html'), 'utf8', (error, content) => {
        if (error) return res.send(`sorry, there was an error ;( ERROR : ${error.message}`)

        res.send(content)
    })
})

app.post('/register', (req, res) => {
    debugger
    req.setEncoding('utf8')

    let content = ''

    req.on('data', chunk => {
        //console.log(chunk)

        content += chunk
    })

    req.on('end', () => {


        const parts = content.split('&')

        let [, fullname] = parts[0].split('=')
        let [, email] = parts[1].split('=')
        let [, password] = parts[2].split('=')

        //fullname = fullname.replaceAll('+', ' ') // ERROR not supported in NodeJS yet (but in the browsers yes :( ))

        fullname = fullname.split('+').join(' ')

        email = decodeURIComponent(email)

        password = decodeURIComponent(password)

        //console.log(fullname, email, password)

        const id = `${Date.now()}${`${Math.random() * 10**18}`.padStart(18, '0')}`
        
        const user = { id, fullname, email, password }

        const json = JSON.stringify(user)

        fs.writeFile(path.join(__dirname, `./data/users/${id}.json`), json, error => {
            if (error) return res.send(`sorry, there was an error :( ERROR: ${error.message}`)

            res.send(`ok, user registered ,) ID: ${id}`)
        })
    })
})

app.get('/login', (req, res) => {
    fs.readFile(path.join(__dirname, './public/login/index.html'), 'utf8', (error, content) => {
        if (error) return res.send(`sorry, there was an error  ERROR: ${error.message}`)

        res.send(content)
    })
})


let session


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
            if (error) {
                return fs.readFile(path.join(__dirname, './public/error/index.html'), 'utf8', (error, content) => {
                    if (error) return res.send(`sorry, there was an error, ERROR: ${error.message}`)

                    res.send(content)
                })
            }

            session = userId
            
            res.redirect('/')
            })
        })
    })

    app.get('/', (req, res) => {
        if (session)
            fs.readFile(path.join(__dirname, './public/home/index.html'), 'utf8', (error, content) => {
                if (error) return res.send(`sorry, there was an error :( ERROR: ${error.message}`)
    
                retrieveUser(session, (error, user) => {
                    if (error) {
                        return fs.readFile(path.join(__dirname, './public/error/index.html'), 'utf8', (error, content) => {
                            if (error) return res.send(`sorry, there was an error :( ERROR: ${error.message}`)
    
                            res.send(content)
                        })
                    }
    
                    res.send(content.replace('{fullname}', user.fullname))
                })
    
            })
        else res.redirect('/login')
    })
    
    app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))     
