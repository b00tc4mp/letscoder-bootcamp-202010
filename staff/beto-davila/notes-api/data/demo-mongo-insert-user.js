const { MongoClient } = require('mongodb')

const client = new MongoClient('mongodb://localhost:27017')

// MongoClient instance with connect method
client.connect((error, connection) => {
    if (error) return console.error(error)

    // 1. db connection
    const db = connection.db('letscoder')

    // 2. users' db
    const users = db.collection('users')

    const fullname = 'Cuca Racha', email = 'cucaracha@mail.com', password = '123123123'
    // const fullname = 'Coco Drilo', email = 'cocodrilo@mail.com', password = '123123123'

    // Inserting a non-existing user, filtering by email, otherwise show an error
    users.findOne({ email }, (error, user) => {
        if (error) return console.error(error)

        if (user) {

            console.error(new Error('user already exists!'))

            return client.close()
        }


        users.insertOne({ fullname, email, password }, (error, result) => {
            if (error) return console.error(error)

            console.log('user created', result)

            client.close()
        })
    })
})