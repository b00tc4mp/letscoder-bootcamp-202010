const { validateCallback } = require('./helpers/validations')
const context = require('./context')
const ObjectId = require('mongodb').ObjectId; 
//const { ObjectId } = require('mongodb'); 
const {env : {DB_NAME} } = process


module.exports = function (id, callback) {
    
    validateCallback(callback)


    let _id = new ObjectId(id)   // id as a string is passed

    const { connection } = context

    const db = connection.db(DB_NAME)

    const users = db.collection('users')


        users.findOne({_id}, (error, user) => {
            console.log({user})
        if (error) {return callback(error)
        } if(user){  

            delete user.password  

            return callback(null, user)
        }else return callback(new Error(`user with id ${id} not found`))


    })
}