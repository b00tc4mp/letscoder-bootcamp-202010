const { validateId, validateCallback } = require('./helpers/validations')
const context = require('./context')

const { env: { DB_NAME } } = process

module.exports = (id, callback) => {
    //validateId(id)
    validateCallback(callback)

    const { connection } = context

    const db = connection.db(DB_NAME)

    const users = db.collection('users')

    users.findOne( { _id: `ObjectId("${id}")` }, (error, user) => {
        if(error) {
           return callback (error)
        }
        if(user){  

            delete user.password  

            return callback(null, user)
        }else return callback(new Error(`user with id ${id} not found`))

    }) 

}