require('dotenv').config()

const express = require('express')
const logger = require('./utils/logger')

const { env: { PORT }, argv: [,,port = PORT || 8080]} = process

const app = express()

const { web, api } = require('./routes')

const {
    handleNotFound
} = require('./routes/web/handlers')

app.set('view engine', 'pug')

app.use(express.static('public'))

app.use(web)

app.use(api)

app.get('/*', handleNotFound)

app.listen(port, () =>{
 logger.log(`server running on port ${port}`)
 console.log(`server running on port ${port}`)})

process.on('SIGINT', () => {
console.log('stopping server')
logger.log(`stopping server`, 'info', () => process.exit(0))})