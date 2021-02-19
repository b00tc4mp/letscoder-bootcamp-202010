const { MongoClient } = require('mongodb')

const client = new MongoClient('mongodb://localhost:27017')

client.connect((error, connection) => {
    if (error) return console.error(error)

    const db = connection.db('letscoder')

    const users = db.collection('users')

    //const fullname = 'Cuca Racha', email = 'cucaracha@mail.com', password = '123123123'
    const fullname = 'Coco Drilo', email = 'cocodrilo@mail.com', password = '123123123'

    users.findOne({ email }, (error, user) => {
        if (error) return console.error(error)

        if (user) return console.error(new Error('user already exists!'))

        users.insertOne({ fullname, email, password }, (error, result) => {
            if (error) return console.error(error)

            console.log('user created', result)

            // client.close()
        })
    })
})