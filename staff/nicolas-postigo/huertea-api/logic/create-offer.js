const { validateId, validateOffer, validateTitleoffer } = require('./helpers/validations')
const { User } = require('../models')
const { Offer } = require('../models')
const { NotFoundError } = require('../errors')
const semaphore = require('./helpers/semaphore')

module.exports = function (ownerId, offerId, offername, titleoffer, image) {
    validateId(ownerId)
    validateOffer(offername)
    if (typeof offerId !== 'undefined') validateId(offerId)
    validateTitleoffer(titleoffer)


    return semaphore(() =>
        User
            .findById(ownerId).lean()
            .then(user => {
                if (!user) throw new NotFoundError(`user with id  ${ownerId}  not found`)
                const { _id } = user
                user.id = _id.toString()


                if (offerId) {


                    return Offer
                        .findById(offerId)
                        .then(offer => {
                            if (!offer) throw new NotFoundError(`offer with id ${offerId} not found`)

                            return Offer
                                .updateOne({ ownerId }, { $set: { offername, titleoffer, image } })
                                .then(() => { })
                        })
                } else
                    return Offer.create({ offername, titleoffer, image, owner: ownerId })
                        .then(() => { })
            })
    )
}
