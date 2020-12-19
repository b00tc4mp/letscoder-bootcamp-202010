const { mongoose } = require('geogin-data')
const { models: { User } } = require('geogin-data')
const updateUser = require('../update-user')

MONGODB_URL = 'mongodb://localhost:27017/geogin-app'

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false })
    .then(() => updateUser('5fdc8f328f3e5a3ae252eb7f', {fullname: "lolololo", password: "gotilio"}))
    .then(console.log)
    .catch(console.error)
    .then(mongoose.disconnect)
