const { validateId, validateCallback } = require('./helpers/validations')
const context = require('./context')

const { env: { DB_NAME } } = process

module.exports = (id, callback) => {
    //validateId(id)
    validateCallback(callback)

    const { connection } = context

    const db = connection.db(DB_NAME)

    const notes = db.collection('notes')

    //let results = []

    notes.find({owner: id}, (error, results) => {
        if(error){
            return callback(error)
        }
        if(results){
            return callback (null, results)
        }
    })

}