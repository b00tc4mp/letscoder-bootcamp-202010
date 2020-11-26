require('dotenv').config()
const { MongoClient } = require('mongodb')
const context = require('./context')

const toggleFollowUser = require ('./toggle-follow-user')

const { env: { MONGODB_URL } } = process

const client = new MongoClient(MONGODB_URL, { useUnifiedTopology: true })

client.connect((error, connection) => {
    if (error) return console.error(error)

    context.connection = connection

    toggleFollowUser('5fb898ff3a550d5535a9963d', '5fb8fad9a15a822fff0a201b', console.log)

})
