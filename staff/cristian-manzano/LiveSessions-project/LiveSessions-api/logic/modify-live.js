const {
    validateId,
    validateDescription,
    validateTitle,
    validateLiveDate,
    validateStatus,
    validateDuration,
    validatePayment
  } = require("./helpers/validations");
  const semaphore = require('./helpers/semaphore')
const { ConflictError } = require('../errors')
const { Live } = require('../models')

module.exports = function (liveId, title, liveDate, duration, status, payment, description) {

    if (typeof liveId !== "undefined") validateId(liveId);
    validateTitle(title)
    validateLiveDate(liveDate)
    validateStatus(status)
    validateDuration(duration)
    validatePayment(payment)
    validateDescription(description)

    return semaphore(() => 
        Live
            .findOne({ _id: liveId }).lean()
            .then(live => {
                // if (!live) throw new Error(`live with id ${liveId} does not exists`)
                Live.updateOne({ _id: liveId }, {$set: { title, liveDate, duration, status, payment, description } })
                .then(result => '')
            })
    )
}