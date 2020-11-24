require('dotenv').config()
const { MongoClient } = require('mongodb')
const context = require('./context')

const toggleFollowUser = require ('./toggle-follow-user')

const { env: { MONGODB_URL } } = process

const client = new MongoClient(MONGODB_URL, { useUnifiedTopology: true })

client.connect((error, connection) => {
    if (error) return console.error(error)

    context.connection = connection

    toggleFollowUser('5fb898ff3a550d5535a9963d', '5fbbda6e3ab45e26edb2f9ac', console.log)

})