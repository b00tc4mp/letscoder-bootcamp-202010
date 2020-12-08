const {validateId, validateTitle} = require('./helpers/validations')
const{ObjectId} = require('mongodb')
const{NotFoundError} = require('../errors')
const {User} = require('../models')
const {Pictogram} = require('../models')

module.exports = function (pictogramId, ownerId, title, description) {
    validateId(ownerId)
    if (typeof pictogramId !== 'undefined') validateId(pictogramId)
    validateTitle(title)
    
    const _id = ObjectId(ownerId)

    return User
        .findOne({ _id })
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${ownerId} not found`)


        if (pictogramId) {
            const _id = ObjectId(pictogramId)

            return Pictogram
                .findOne({ _id })
                .then (pictogram => {
                    if (!pictogram) throw new NotFoundError(`note with id ${pictogramId} not found`)

                return Pictogram
                    .updateOne({_id}), {$set : {title, description}}
                    .then (result => result.id) 

            })
        } else
            return Pictogram
            .create({owner: ObjectId(ownerId), title, description})
            .then(result => result.id)

    })
} 