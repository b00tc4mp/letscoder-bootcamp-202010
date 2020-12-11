const { validateId, validateOffer, validateTitleoffer } = require('./helpers/validations')
const { User } = require('../models')
const { Offer } = require('../models')
const { NotFoundError } = require('../errors')
const semaphore = require('./helpers/semaphore')
const { ObjectID } = require('mongodb')

module.exports = function (ownerId, offerId) {
    validateId(ownerId)
debugger
    validateId(offerId)



    return semaphore(() =>
        User
            .findById(ownerId).lean()
            .then(user => {
                if (!user) throw new NotFoundError(`user with id  ${ownerId}  not found`)
                debugger
                if (offerId) {


                    return Offer
                        .findById(offerId)
                        .then(offer => {
                            if (!offer) throw new NotFoundError(`offer with id ${offerId} not found`)
                            debugger
                            return Offer
                                .deleteOne({ _id: ObjectID(offerId) })
                                .then(() => {})

                        })
                } 
            })
    )
}
