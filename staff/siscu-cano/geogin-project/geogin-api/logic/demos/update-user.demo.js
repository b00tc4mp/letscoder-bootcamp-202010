const { mongoose } = require('geogin-data')
const { models: { User } } = require('geogin-data')
const updateUser = require('../update-user')

MONGODB_URL = 'mongodb://localhost:27017/geogin-app'

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
    .then(() => updateUser('5fcbffce7f06433c78f3193e', {fullname: "pepe", password: "gotilio"}))
    .then(console.log)
    .catch(console.error)
    .then(mongoose.disconnect)
