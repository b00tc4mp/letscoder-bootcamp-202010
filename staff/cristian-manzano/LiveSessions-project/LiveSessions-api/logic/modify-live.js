// const { validateEmail, validateCity, validateDescription, validateTags, validateArtistName, validateFullname } = require('./helpers/validations')
const semaphore = require('./helpers/semaphore')
const { ConflictError } = require('../errors')
const { Live } = require('../models')
debugger
module.exports = function (liveId, title, liveDate, duration, payment, description) {
debugger
    return semaphore(() => 
        Live
            .findOne({ _id: liveId }).lean()
            .then(live => {
                if (!live) throw new ConflictError(`live with id ${liveId} does not exists`)
                Live.updateOne({ _id: liveId }, {$set: { title, liveDate, duration, payment, description } })
                .then(result => '')
            })
    )
}