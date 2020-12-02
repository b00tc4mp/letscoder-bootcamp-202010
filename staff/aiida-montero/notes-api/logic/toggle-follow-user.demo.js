require('dotenv').config()

const { MongoClient } = require('mongodb')
const context = require('./context')
const toggleFollowUser = require('./toggle-follow-user')

const { env: { MONGODB_URL } } = process

const client = new MongoClient(MONGODB_URL, { useUnifiedTopology: true })

client.connect()
    .then(connection => {
        context.connection = connection

        return toggleFollowUser('5fb9adfa1be97a1450351367', '5fba7f67921d4321a4553278')
    })
    .then(console.log)
    .catch(console.error)
    .then(() => client.close())
    .catch(console.error)