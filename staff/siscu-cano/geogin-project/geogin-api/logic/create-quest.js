const {
  validateTitle,
  validateCoverImg,
  validateHomeLocation,
  validateEndLocation,
  validateTime,
  validateVisibility,
  validateKidsOk,
  validateEvaluations,
  validateTest,
  validateDescription,
  validateId
} = require('./helpers/validations')
const semaphore = require('./helpers/semaphore')
const mongoose = require('mongoose')
const { ConflictError } = require('geogin-errors')
const { User, Quest } = require('../models')

module.exports = function (
  title,
  coverImg,
  homeLocation,
  endLocation,
  time,
  visibility,
  kids_ok,
  evaluations,
  tests,
  description,
  ownerId
) {
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
  validateId(ownerId)

  return User.findById(ownerId)
    .lean()
    .then(user => {
      if (!user) throw new NotFoundError(`user with id ${ownerId} not found`)

      return Quest.create({
        title,
        coverImg,
        homeLocation,
        endLocation,
        time,
        visibility,
        kids_ok,
        evaluations,
        tests,
        description,
        ownerId: new mongoose.mongo.ObjectId(ownerId)
      }).then(() => {})
    })
}
