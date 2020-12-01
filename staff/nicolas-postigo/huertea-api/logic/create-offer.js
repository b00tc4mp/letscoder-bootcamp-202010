const { validateToken, validateUpdate, validateCallback } = require('./helpers/validations')
const semaphore = require('./helpers/semaphore')
const { ConflictError } = require('../errors')
const { Offer } = require('../models')


module.exports = function (offername) {
    

    return semaphore(() =>
        Offer
            .findOne({ offername })
            .then(offer => {
            if (offer) throw new ConflictError(`offername with text ${offername} already registered`)

            return Offer.create({ offername })
            })
            .then(() => {})
    )
}