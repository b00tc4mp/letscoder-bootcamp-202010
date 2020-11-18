// dotenv loads environment variables from a .env file into process.env
require('dotenv').config()

const express = require('express')
const logger = require('./utils/logger')
const app = express()

// process destructuring 
const { env: { PORT }, argv: [,, port = PORT || 8080] } = process


const { web, api } = require('./routes')

const withErrorHandling = require('./routes/web/helpers/with-error-handling')
const { handleNotFound } = require('./routes/web/handlers/indexer')

// pug templating framework
app.set('view engine', 'pug')

app.use(express.static('public'))

app.use(web)

app.use(api)

// not found route
app.get('/*', withErrorHandling(handleNotFound))

app.listen(port, () => { logger.log(`server running on port ${port}`) })
   
process.on('SIGINT', () => { logger.log(`stopping server`, 'info', () => process.exit(0)) })