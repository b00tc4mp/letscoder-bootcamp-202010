const { validateTitle, validateCoverImg, validateHomeLocation, validateEndLocation, validateTime, validateVisibility, validateKidsOk, validateEvaluations, validateTest, validateDescription, validateId  } = require('./helpers/validations')
const semaphore = require('./helpers/semaphore')
const { ConflictError } = require('geogin-errors')
const { Game } = require('../models')

module.exports = function (title, coverImg, homeLocation, endLocation, time, visibility, kids_ok, evaluations, tests, description, ownerID) {
    validateTitle(title)
    validateCoverImg(coverImg)
    validateHomeLocation(homeLocation)
    validateEndLocation(endLocation)
    validateTime(time)
    validateVisibility(visibility)
    validateKidsOk(kids_ok)
    validateEvaluations(evaluations)
    validateTest(tests)
    validateDescription(description)
    validateId(ownerID)





}


