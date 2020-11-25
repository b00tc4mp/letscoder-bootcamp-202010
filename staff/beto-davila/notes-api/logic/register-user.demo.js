require('dotenv').config()

const { MongoClient } = require('mongodb')
const context = require('./context')

const registerUser = require('./register-user')

const { env: { MONGODB_URL } } = process

const client = new MongoClient(MONGODB_URL, { useUnifiedTopology: true })

return client
    .connect()
    .then(connection => {

        context.connection = connection
        try {
            registerUser('Gato Calvo', 'gato@gmail.com', '123')
            .then(() => console.log('user registered'))
            .catch(error => console.log('user could not be registered', error))
            // .then(() => client.close())
            // .then(() => console.log('connection closed'))
            // registerUser('manuel barzi', 'manuelbarzi@gmail.com', '123123123', console.log)
            // console.log(2)
            // registerUser('manuel barzi', 'manuelbarzi@gmail.com', '123123123', console.log)
            // console.log(3)
    
    
            // setTimeout(() => {
            //     registerUser('manuel barzi', 'manuelbarzi@gmail.com', '123123123', console.log)
            //     console.log(1)
            //     registerUser('manuel barzi', 'manuelbarzi@gmail.com', '123123123', console.log)
            //     console.log(2)
            //     registerUser('manuel barzi', 'manuelbarzi@gmail.com', '123123123', console.log)
            //     console.log(3)
            // }, 3000)
            
        } catch (error) {
            console.log('validation error', error)
        }

})