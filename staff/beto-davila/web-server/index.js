// dotenv loads environment variables from a .env file into process.env
require('dotenv').config()

const express = require('express')
const logger = require('./utils/logger')
const app = express()

// process destructuring 
const { env: { PORT }, argv: [,, port = PORT || 8080] } = process

// web and api destructuring
const { web, api } = require('./routes')
// web and API routes
app.use(web)
app.use(api)

const withErrorHandling = require('./routes/web/helpers/with-error-handling')
const { handleNotFound } = require('./routes/web/handlers/indexer')

// set pug templating framework
app.set('view engine', 'pug')

// static files service (css, jsx, favicon, html...)
app.use(express.static('public'))

// 'not-found' route
app.get('/*', withErrorHandling(handleNotFound))

app.listen(port, () => { 
    console.log(`server running on port ${port}`)
    logger.log(`server running on port ${port}`) })

// SIGNIT is the ctrl+c combination to stop process
process.on('SIGINT', () => { logger.log(`stopping server`, 'info', () => process.exit(0)) })