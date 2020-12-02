require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const logger = require('./utils/logger')
const { cors } = require('./middlewares')

const { env: { PORT, MONGODB_URL }, argv: [, , port = PORT || 8080] } = process

logger.log('starting server', 'info')

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
    .then(() => {
        const app = express()

        app.use(cors)

        const { api } = require('./routes')

        app.use(api)

        app.get('/*', (req, res) => res.status(404).send('Not found :('))

        app.listen(port, () => logger.log(`server running on port ${port}`))
    })
    .catch(error =>
        logger.log(error, 'error', error => {
            if (error) console.error(error)

            shutDown()
        })
    )

const shutDown = () => logger.log(`stopping server`, 'info', error => {
    if (error) console.error(error)

    if (mongoose.connection.readyState === 1)
        return mongoose.disconnect()
            .catch(console.error)
            .then(() => process.exit(0))

    process.exit(0)
})

process.on('SIGINT', shutDown)