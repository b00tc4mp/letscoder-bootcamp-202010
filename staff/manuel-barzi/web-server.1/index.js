const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')

app.get('/', (req, res) => {
    res.send(':)')
})

app.get('/helloworld', (req, res) => {
    //res.send('Hello World!')

    //res.set('Content-type', 'text/plain')
    //res.set('Access-Control-Allow-Origin', '*')

    //res.send(`<h1>hola mundo</h1>`)

    fs.readFile('./public/helloworld/index.html', 'utf8', (error, content) => {
        if (error) return res.send(`sorry, there was an error :( ERROR: ${error.message}`)

        res.send(content)
    })
})

app.get('/register', (req, res) => {
    fs.readFile('./public/register/index.html', 'utf8', (error, content) => {
        if (error) return res.send(`sorry, there was an error :( ERROR: ${error.message}`)

        res.send(content)
    })
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

        //fullname = fullname.replaceAll('+', ' ') // ERROR not supported in NodeJS yet (but in the browsers yes :( ))

        fullname = fullname.split('+').join(' ')

        email = decodeURIComponent(email)

        // TODO check whether user already exists and throw error in that case, otherwise continue with register

        password = decodeURIComponent(password)

        //console.log(fullname, email, password)

        const id = `${Date.now()}${`${Math.random() * 10**18}`.padStart(18, '0')}`

        const user = { id, fullname, email, password }

        const json = JSON.stringify(user)

        fs.writeFile(`./data/users/${id}.json`, json, error => {
            if (error) return res.send(`sorry, there was an error :( ERROR: ${error.message}`)

            res.send(`ok, user registered ,) ID: ${id}`)
        })
    })
})

app.get('/login', (req, res) => {
    fs.readFile('./public/login/index.html', 'utf8', (error, content) => {
        if (error) return res.send(`sorry, there was an error :( ERROR: ${error.message}`)

        res.send(content)
    })
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

        //console.log(email, password)

        // TODO check user exists in data (read all files, and try to match a user, otherwise login error)

        // call authenticate user logic

        res.send('ok, logged in ,)')
    })
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))