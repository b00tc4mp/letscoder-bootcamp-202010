const { validateId, validateOffer, validateTitleoffer } = require('./helpers/validations')
const { models: { User } } = require('huertea-data')
const { Offer } = require('../../huertea-data/models')
const { NotFoundError } = require('../errors')
const semaphore = require('./helpers/semaphore')
const { ObjectID } = require('mongodb')

module.exports = function (ownerId, offerId) {
    validateId(ownerId)

    validateId(offerId)



    return semaphore(() =>
        User
            .findById(ownerId).lean()
            .then(user => {
                if (!user) throw new NotFoundError(`user with id  ${ownerId}  not found`)
                
                if (offerId) {


                    return Offer
                        .findById(offerId)
                        .then(offer => {
                            if (!offer) throw new NotFoundError(`offer with id ${offerId} not found`)
                            
                            return Offer
                                .deleteOne({ _id: ObjectID(offerId) })
                                .then(() => {})

                        })
                } 
            })
    )
}
