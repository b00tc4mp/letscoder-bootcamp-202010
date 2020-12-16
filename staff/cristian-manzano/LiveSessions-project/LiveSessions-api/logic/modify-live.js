// const { validateEmail, validateCity, validateDescription, validateTags, validateArtistName, validateFullname } = require('./helpers/validations')
const semaphore = require('./helpers/semaphore')
const { ConflictError } = require('../errors')
const { Live } = require('../models')

module.exports = function (liveId, title, date, duration, payment, description) {

    return semaphore(() => 
        Live
            .findOne({ liveId })
            .then(live => {
                if (!live) throw new ConflictError(`user with email ${liveId} does not exists`)
                Live.updateOne({ liveId }, {$set: { title, date, duration, payment, description } })
                .then(result => undefined)
            })
    )
}