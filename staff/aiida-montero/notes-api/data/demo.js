const {MongoClient} = require('mongodb')

const client = new MongoClient('mongodb://localhost:27017/letscoder')

client.connect((error, connection) =>{
    if (error) return console.error(error)

    const db = connection.db('letscoder')

    const users = db.collection('users')

    const fullname = 'Pepe', email = 'pep@gmail.com', password= '123'
     
    users.findOne({ email}, (error, user) => {
        if(error) return console.error(error)

        if(user) return console.error(new Error ('user already exist'))
    })
    users.insertOne({fullname: 'Aida', email: 'Aida@gmail.com', password: '123'}, (error, result) =>{
        if (error) return console.error(error)
        console.log('user created', result)
   /*      client.close() */
    })
})