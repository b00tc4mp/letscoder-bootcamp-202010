require('dotenv').config()

const express = require('express')
const logger = require('./utils/logger')

const { env: { PORT }, argv: [, , port = PORT || 8080] } = process

const app = express()

const { api } = require('./routes')

app.options('*', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')

    res.status(204).send()
})

app.use(api)

app.get('/*', (req, res) => res.status(404).send('Not found :('))

app.listen(port, () => logger.log(`server running on port ${port}`))

process.on('SIGINT', () => logger.log(`stopping server`, 'info', () => process.exit(0)))