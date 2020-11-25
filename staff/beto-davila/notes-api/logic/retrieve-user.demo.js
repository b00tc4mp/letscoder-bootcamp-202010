require('dotenv').config()
const { MongoClient } = require('mongodb')
const context = require('./context')
const retrieveUser = require('./retrieve-user')

const { env: { MONGODB_URL } } = process

const client = new MongoClient(MONGODB_URL, { useUnifiedTopology: true })

return client.connect().then(connection => {

    context.connection = connection

    try {
        retrieveUser('5fb8fad9a15a822fff0a201b')
        .then((user) => console.log(user))
        .catch(error => console.log('could not retrieve user', error))
        .then(() => client.close())
    } catch (error) {
        console.log ('validation error', error)
    }

})