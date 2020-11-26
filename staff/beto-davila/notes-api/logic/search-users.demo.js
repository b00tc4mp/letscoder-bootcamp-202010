require('dotenv').config()
const { MongoClient, connect } = require('mongodb')
const context = require('./context')

const searchUsers = require ('./search-users')

const { env: { MONGODB_URL } } = process

const client = new MongoClient(MONGODB_URL, { useUnifiedTopology: true })

return client
    .connect()
    .then(connection => {

    context.connection = connection

    try {
        searchUsers('undo')
        .then( users => console.log('The result of your search:', users))
        .catch(error => console.log('could not find any match', error))
        .then(() => client.close())
        .then(() => console.log('client closed'))
        
    } catch (error) {
        console.log('validation error', error)
    }

})