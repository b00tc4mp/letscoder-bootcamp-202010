const { models: { User } } = require('geogin-data')
const registerUser = require('../register-user')
const { mongoose } = require('geogin-data')

MONGODB_URL = 'mongodb://localhost:27017/geogin-app'

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => User.deleteMany())
    .then(() => Promise.all([
        registerUser('Pa Járito', 'pajarin@mail.com', '123123123').then(console.log).catch(console.error),
        registerUser('Pa Járito', 'pajarin@mail.com', '123123123').then(console.log).catch(console.error),
        registerUser('Pa Járito', 'pajarin@mail.com', '123123123').then(console.log).catch(console.error),
        registerUser('Gu Sánito', 'gusanin@mail.com', '123123123').then(console.log).catch(console.error)
    ])
    )
    .catch(console.error)
    .then(() => mongoose.disconnect())
    .then(() => console.log('ended'))