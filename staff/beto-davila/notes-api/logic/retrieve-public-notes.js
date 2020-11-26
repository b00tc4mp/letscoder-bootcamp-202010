const { validateId } = require('./helpers/validations')
const { ObjectId } = require('mongodb')
const context = require('./context')
const { NotFoundError } = require('../errors')

const { env: { DB_NAME } } = process

// TODO retrieve user followings
// TODO retrieve public notes of each following
// TODO sort all public notes by date DESC

module.exports = function (userId) {
    validateId(userId)

    const { connection } = this
    
    const db = connection.db(DB_NAME)
    
    const users = db.collection('users')
    const notes = db.collection('notes')
    
    const _id = ObjectId.createFromHexString(userId)
    let publicNotes = []
    
    return users
    .findOne({ _id })
    .then( user => {
        
        if (!user) throw new NotFoundError(`The user with id ${userId} was not found`)
        
            const { _id, followings } = user

            user = { userId: _id }

            if (followings) {

                followings.forEach( following => {
                    return users.findOne({_id})
                    .then( user => {
                        
                        user = { followings: [ following ] }

                        const cursor = notes.find({ owner: following })
                        debugger
                        return cursor
                                .toArray()
                                .then(_notes => {

                                    const { tags, id } = _notes
                                    tags.map( tag => {
                                        if (tag === 'public')

                                            publicNotes = publicNotes.push(ObjectId.createFromHexString(id))

                                        else throw new NotFoundError('your followee does not have public notes')
                                        })

                                })
                            
                        })
                })
            } else throw new NotFoundError('not following yet')      
    })
}.bind(context)