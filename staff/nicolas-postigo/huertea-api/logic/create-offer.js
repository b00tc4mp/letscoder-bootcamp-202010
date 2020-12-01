const { validateToken, validateUpdate, validateCallback } = require('./helpers/validations')
const semaphore = require('./helpers/semaphore')
const { ConflictError } = require('../errors')
const { User } = require('../models')
const bcryptjs = require('bcryptjs')
const offer = require('../models/schemas/offer')

module.exports = function (token, update, callback) {
    validateToken(token)
    validateUpdate(update)
    validateCallback(callback)

    return semaphore(() =>
        Offer
            .findOne({ text })
            .then(text => {
            if (text) throw new ConflictError(`text with e-mail ${text} already registered`)

            return Offer.create({ text })
            })
            .then(() => { })
    )
}