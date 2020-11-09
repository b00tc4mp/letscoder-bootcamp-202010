const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')

app.get('/', (req, res) => {
    res.send(':)')
})
app.get('/helloworld', (req, res) => {

    //res.send('Hello World!')

/*     res.set('Content-type', 'text/plain')
    res.set('Access-Control-Allow-Origin', '*')

    res.send(`hola mundo`) */

    fs.readFile('./public/helloworld/index.html', 'utf8', (error, content) => {
         if (error) return res.send(`sorry, there was an error :( ERROR: ${error.message}`)

         res.send(content)
    })
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})