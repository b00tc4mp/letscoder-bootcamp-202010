require('dotenv').config()

const { MongoClient } = require('mongodb')
const context = require('./context')
const findUsers = require('./find-users')

MONGODB_URL = 'mongodb://localhost:27017/geogin-app'

const client = new MongoClient(MONGODB_URL, { useUnifiedTopology: true })

client.connect()
    .then(connection => {
        context.connection = connection

        //eturn findUsers('falo buffy')
        //return findUsers('gr') // WARN the $search operator in mongo works as the search engines (mathing elements by words matching full criteria, not starting by criteria)
        return findUsers('jarito')
    })
    .then(console.log)
    .catch(console.error)
    .then(() => client.close())
    .catch(console.error)