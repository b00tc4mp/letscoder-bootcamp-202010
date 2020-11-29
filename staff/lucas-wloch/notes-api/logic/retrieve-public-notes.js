const { validateId, validateFollows } = require('./helpers/validations')
const ObjectId = require('mongodb').ObjectId;
const { NotFoundError } = require('../errors')
const { User, Note } = require('../models')


module.exports = (userId, follows) => {
    validateId(userId)
    validateFollows(follows)

    if(!(follows.length > 0 )) return Promise.resolve([])

    return User
        .findOne({ _id: ObjectId(userId) })
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            
            follows = follows.map(id => {
                let obj = {}
                obj.owner = ObjectId(id)

                return obj
            })

            
            return Note
            .find({ $or: follows })//, { sort: { date: -1 } }
            .then(notes => {
                if (!notes) return []
                notes = notes.map(({ _id, text, tags, owner, visibility, date }) => ({ id: _id.toString(), text, tags, owner: owner.toString(), visibility, date }))
                
                return notes
            })
        })
        // $or [ {owner: objectId(id)},{owner: objectId(id)},{owner: objectId(id)} ]

    // notes.find({ owner: ObjectId(owner) }).toArray((error, results) => {
    //     if (error) {

    //         return callback(error)
    //     }
    //     if (results) {
    // results = results.map(({_id, text, tags, owner, visibility}) => ({id: _id.toString(), text, tags, owner: owner.toString(), visibility}))
    //         return callback(null, results)
    //     }
    // })
}
