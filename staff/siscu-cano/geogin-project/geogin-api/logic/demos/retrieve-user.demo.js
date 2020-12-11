require('dotenv').config()

const { models: { User } } = require('geogin-data')
const retrieveUser = require('../retrieve-user')

const { env: { MONGODB_URL } } = process

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
    .then(() => retrieveUser('5fcbffce7f06433c78f3193e'))
    .then(console.log)
    .catch(console.error)
    .then(mongoose.disconnect)




