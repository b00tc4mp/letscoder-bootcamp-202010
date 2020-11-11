const express = require('express')
const fs = require('fs')

const app = express ()
const port = 3000


app.get('/register', (req, res) => {

    fs.readFile('./public/register/index.html', 'utf8', (error, content) => {
        if (error) return res.send(`sorry, there was an error :( ERROR: ${error.message}`)

        res.send(content)
    })
})

app.post('/register', (req, res) => {
    req.setEncoding('utf8')

    let content = ''

    req.on('data', chunk => {

        content += chunk

    })

    req.on('end', () => {

        const parts = content.split('&')


        let [, fullname] = parts[0].split('=')
        let [, email] = parts[1].split('=')
        let [, password] = parts[2].split('=')

        fullname = fullname.split('+').join(' ')

        email = decodeURIComponent(email)

        password = decodeURIComponent(password)

        const id = `${Date.now()}${`${Math.random() * 10**18}`.padStart(18, '0')}`

        const user = { id, fullname, email, password}

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


app.get('/login', (req, res) =>{
    req.setEncoding('utf8')
    
    let content = ''

    req.on('data', chunk => {

        content += chunk
    })

    req.on('end', () => {
        const parts = content.split('&')

        let [, email] = parts[1].split('=')
        let [, password] = parts[2].split('=')

        email = decodeURIComponent(email)

        password = decodeURIComponent(password)

        console.log(email, password)

        res.send('ok, logged in')
    })

})


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`)) 