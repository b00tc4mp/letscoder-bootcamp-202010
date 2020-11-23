const { validateCallback } = require('./helpers/validations')
const context = require('./context')
//const ObjectId = require('mongodb').ObjectId; 
//const { ObjectId } = require('mongodb'); 
const {env : {DB_NAME} } = process


module.exports = function (query, callback) {
    
    validateCallback(callback)

    const { connection } = context

    const db = connection.db(DB_NAME)

    const users = db.collection('users')

    //db.users.find({ email: {$regex: 'i'}})


        users.find({email: {$regex: query} }, (error, cursor) => {
       
            if (error) return callback(error)
        
            if(!query) return callback (new Error ('Query not found'))  

            cursor.toArray((error, users) => {
                if (error) return callback(error)

                users = users.map(({ fullname, email }) => ({ fullname, email }))

                callback(null, users)
            })
            
    })
}