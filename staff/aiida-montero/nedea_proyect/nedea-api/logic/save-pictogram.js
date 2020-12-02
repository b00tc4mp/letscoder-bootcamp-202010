const {validateId, validateTittle} = require('./helpers/validations')
const{ObjectId} = require('mongodb')
const{NotFoundError} = require('../errors')
const {User} = require('../models')
const {Pictogram} = require('../models')

module.exports = function (PictogramId, ownerId, tittle, description) {
    validateId(ownerId)
    if (typeof PictogramId !== 'undefined') validateId(PictogramId)
    validateTittle(tittle)
    
    const _id = ObjectId(ownerId)

    return User
        .findOne({ _id })
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${ownerId} not found`)


        if (PictogramId) {
            const _id = ObjectId(PictogramId)

            return Pictogram
                .findOne({ _id })
                .then (pictogram => {
                    if (!pictogram) throw new NotFoundError(`note with id ${pictogramId} not found`)

                return Pictogram
                    .updateOne({_id}), {$set : {tittle, description}}
                    .then (result => undefined) 

            })
        } else
            return Pictogram
            .create({owner: ObjectId(ownerId), tittle, description})
            .then(result => undefined)

    })
} 