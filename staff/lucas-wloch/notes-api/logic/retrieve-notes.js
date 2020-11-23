const { validateId, validateCallback } = require('./helpers/validations')
const context = require('./context')
const { env: { DB_NAME } } = process
const ObjectId = require('mongodb').ObjectId;


module.exports = (owner, callback) => {
    // validateId(id)
    validateCallback(callback)

    const { connection } = context

    const db = connection.db(DB_NAME)

    const users = db.collection('users')
    debugger
    // let results = []
    // let o_id = new ObjectId(id)

    users.findOne({ _id: ObjectId(owner)  }, (error, user) => {
        if (error) {
            return callback(error)
        }
        if (!user) return callback(new Error(`user with id ${owner} not found`))

        const notes = db.collection('notes')
        //{ sort: { date: -1 }} (options)
        notes.find({owner: ObjectId(owner)}, { sort: { date: -1 }}, (error, cursor) => {
            const notes = []

            cursor.each((error, note) => {
                if (error) {
                    return callback(error)
                }
                if(note){
                    const {_id, text, tags, visibility, date} = note
                    
                    note = {id: _id.toString(), text, tags, owner, visibility, date}

                    notes.push(note)
                } else callback(null, notes)//en la ultima pos del cursor note vuelve con un null entonces entra en el else
            })
        })

        // notes.find({ owner: ObjectId(owner) }).toArray((error, results) => {
        //     if (error) {

        //         return callback(error)
        //     }
        //     if (results) {
                // results = results.map(({_id, text, tags, owner, visibility}) => ({id: _id.toString(), text, tags, owner: owner.toString(), visibility}))
        //         return callback(null, results)
        //     }
        // })
    })

}