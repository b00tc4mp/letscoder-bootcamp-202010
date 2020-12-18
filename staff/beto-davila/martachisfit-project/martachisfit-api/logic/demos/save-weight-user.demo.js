require('dotenv').config()

const saveWeightUser = require('../save-weight-user')

const { mongoose } = require('martachisfit-data')

const { env: { MONGODB_URL } } = process

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    try {
        saveWeightUser('5fdbbaf4d27c8a535f4facef', 70)
        .then(console.log)
        .catch(console.error)
        .then(() => mongoose.disconnect())
        .then(() => console.log('ended'))
        
    } catch (error) {
        console.log('validation error', error)
    }