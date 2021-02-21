require('dotenv').config()

const retrieveUser = require('./retrieve-user')
const context = require('./context')
const { MongoClient } = require('mongodb')


const { env: { MONGODB_URL }, } = process

const client = new MongoClient(MONGODB_URL, { useUnifiedTopology: true })


client.connect((error, connection) => {
    if (error) console.error(error)

    context.connection = connection


    retrieveUser({_id:'ObjectId("5fb8f86c5c1dc02f6c9f7ba3")'},(args) => {
        console.log(args)
        client.close()
    } )
    
})