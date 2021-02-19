require('dotenv').config()

const { MongoClient } = require('mongodb')
const context = require('./context')
const toggleFollowUser = require('./toggle-follow-user')

const { env: { MONGODB_URL } } = process

const client = new MongoClient(MONGODB_URL, { useUnifiedTopology: true })

client.connect()
    .then(connection => {
        context.connection = connection

        return toggleFollowUser('5fbd3f11578ed8ad70a65432', '5fbe6e16b15915b8c987cda2')
    })
    .then(console.log)
    .catch(console.error)
    .then(() => client.close())
    .catch(console.error)