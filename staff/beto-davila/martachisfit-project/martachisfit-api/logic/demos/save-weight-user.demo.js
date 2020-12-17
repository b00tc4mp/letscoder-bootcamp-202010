require('dotenv').config()

const saveWeightUser = require('../save-weight-user')

const { mongoose } = require('martachisfit-data')

const { env: { MONGODB_URL } } = process

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    try {
        saveWeightUser('5fd8b720561c12ac58326338', 70)
        .then(console.log)
        .catch(console.error)
        .then(() => mongoose.disconnect())
        .then(() => console.log('ended'))
        
    } catch (error) {
        console.log('validation error', error)
    }