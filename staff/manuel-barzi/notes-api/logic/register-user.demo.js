require('dotenv').config()

const { MongoClient } = require('mongodb')
const context = require('./context')
const registerUser = require('./register-user')

const { env: { MONGODB_URL } } = process

const client = new MongoClient(MONGODB_URL, { useUnifiedTopology: true })

client.connect((error, connection) => {
    if (error) return console.error(error)

    context.connection = connection

    registerUser('manuel barzi', 'manuelbarzi@gmail.com', '123123123').then(console.log).catch(console.error)
    console.log(1)
    registerUser('manuel barzi', 'manuelbarzi@gmail.com', '123123123').then(console.log).catch(console.error)
    console.log(2)
    registerUser('manuel barzi', 'manuelbarzi@gmail.com', '123123123').then(console.log).catch(console.error)
    console.log(3)

    //console.log('hello world')

    setTimeout(() => {
        registerUser('manuel barzi', 'manuelbarzi@gmail.com', '123123123').then(console.log).catch(console.error)
        console.log(1)
        registerUser('manuel barzi', 'manuelbarzi@gmail.com', '123123123').then(console.log).catch(console.error)
        console.log(2)
        registerUser('manuel barzi', 'manuelbarzi@gmail.com', '123123123').then(console.log).catch(console.error)
        console.log(3)

        client.close()
    }, 3000)
})