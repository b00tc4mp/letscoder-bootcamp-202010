require('dotenv').config()

const express = require('express')
const { models: { User } } = require('geogin-data')
const cloudinary = require("cloudinary").v2;
const logger = require('./utils/logger')
const { cors } = require('geogin-middlewares')
const { env: { PORT, MONGODB_URL, CLOUD_NAME, API_KEY, API_SECRET }, argv: [, , port = PORT || 8080] } = process

// cloudinary configuration
cloudinary.config({
    cloud_name: CLOUD_NAME,
    api_key: API_KEY,
    api_secret: API_SECRET
  });


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