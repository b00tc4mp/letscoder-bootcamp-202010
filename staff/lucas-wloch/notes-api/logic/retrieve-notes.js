const { validateId, validateCallback } = require('./helpers/validations')
const context = require('./context')
const { env: { DB_NAME } } = process
// const ObjectId = require('mongodb').ObjectId;


module.exports = (owner, callback) => {
    // validateId(id)
    validateCallback(callback)

    const { connection } = context

    const db = connection.db(DB_NAME)

    const notes = db.collection('notes')
debugger
    // let results = []
    // let o_id = new ObjectId(id)


    notes.find({owner}).toArray((error, results) => {
        if (error) {

            return callback(error)
        }
        if(results){
            return callback(null, results)
        }
    })
}

