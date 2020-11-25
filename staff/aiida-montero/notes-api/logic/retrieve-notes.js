const { validateId } = require('./helpers/validations')
const context = require('./context');
const ObjectId = require('mongodb').ObjectId; 

const { env: { DB_NAME } } = process


module.exports = function (ownerId)  {
    validateId(ownerId)
    const { connection } = this
    
    let _id = new ObjectId(ownerId)   

    const db = connection.db(DB_NAME)

    const users = db.collection('users')
  


    
    return users
    .findOne({ _id })
    .then (user => {    

    if(!user) return callback (new Error (`user with id ${ownerId} not found`))

    const notes = db.collection('notes')

    const owner = _id
    
    return notes
    .find({ owner }, { sort: { date: -1 } }).toArray() 
    .then (notes => {
        const result = notes.map (({ _id, text, tags, visibility, date }) => ({ id : _id.toString(), text, tags , visibility, date }))

        console.log({result})

    
           return result
        })
    })
 
    


}.bind(context)