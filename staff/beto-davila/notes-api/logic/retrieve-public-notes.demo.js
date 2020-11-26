require('dotenv').config()
const { MongoClient } = require('mongodb')
const context = require('./context')
const retrievePublicNotes = require('./retrieve-public-notes')

const { env: { MONGODB_URL } } = process

const client = new MongoClient(MONGODB_URL, { useUnifiedTopology: true })

return client.connect().then(connection => {

    context.connection = connection

    try {
        retrievePublicNotes('5fb898ff3a550d5535a9963d')
        .then((publicNotes) => console.log(publicNotes))
        .catch(error => console.log('no puclic notes to retrieve', error))
        // .then(() => client.close())
    } catch (error) {
        console.log ('validation error', error)
    }

})