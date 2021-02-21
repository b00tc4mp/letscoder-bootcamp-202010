require('dotenv').config()

const authenticateUser = require('../authenticate-user')

const { mongoose } = require('martachisfit-data')

const { env: { MONGODB_URL } } = process

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    try {
        authenticateUser('camaleon@gmail.com', '123')
        .then(console.log('Successful authentication'))
        .catch(console.error)
        .then(() => mongoose.disconnect())
        .then(() => console.log('ended'))
        
    } catch (error) {
        console.log('validation error', error)
    }
 
    