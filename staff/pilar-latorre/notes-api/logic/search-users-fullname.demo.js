require('dotenv').config()

const { MongoClient } = require('mongodb')
const context = require('./context')
const searchUsersFullname = require('./search-users-email')

const { env: { MONGODB_URL } } = process

const client = new MongoClient(MONGODB_URL, { useUnifiedTopology: true })

client.connect((error, connection) => {
    if (error) return console.error(error)

    context.connection = connection

    searchUsersFullname('m', console.log)

})