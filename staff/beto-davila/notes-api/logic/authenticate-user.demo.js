require('dotenv').config()

const { MongoClient } = require('mongodb')
const context = require('./context')

const { env: { MONGODB_URL } } = process

const authenticateUser = require('./authenticate-user')
const client = new MongoClient(MONGODB_URL, { useUnifiedTopology: true })

return client
    .connect()
        .then(connection => {

            context.connection = connection

        try {
            authenticateUser('dagoman19@gmail.com', '1234')
            .then(() => console.log('successfull authentication'))
            .catch(error => console.log(error))
            .then(() => client.close())
            
        } catch (error) {
            console.log('validation error', error)
        }


})

