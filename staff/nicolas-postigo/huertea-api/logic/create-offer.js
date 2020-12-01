const { validateToken, validateUpdate, validateCallback } = require('./helpers/validations')
const semaphore = require('./helpers/semaphore')
const { ConflictError } = require('../errors')
const { Offer } = require('../models')


module.exports = function (offername, titleoffer) {
    

    return semaphore(() =>
        Offer
            .findOne({ titleoffer })
            .then(offer => {
            if (offer) throw new ConflictError(`title offer with text ${titleoffer} already registered`)

            return Offer.create({ offername, titleoffer })
            })
            .then(() => {})
    )
}