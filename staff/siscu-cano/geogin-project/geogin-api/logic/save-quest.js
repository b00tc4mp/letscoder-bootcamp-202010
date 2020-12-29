const semaphore = require('./helpers/semaphore')
const { mongoose: { Types: { ObjectId } }, models: { User, Quest } } = require('geogin-data')
const { NotFoundError } = require('geogin-errors')

const {
  validateTitle,
  validateCoverImg,
  validateHomeLocation,
  validateEndLocation,
  validateTime,
  validateModePrivate,
  validateKidsOk,
  validateEvaluations,
  validateTest,
  validateDescription,
  validateId
} = require('./helpers/validations')

/**
 * Saves quest game
 *
 * @param {string} ownerId
 * @param {string} questId
 * @param {string} title
 * @param {string} coverImg
 * @param {string} description
 * @param {Array} homeLocation
 * @param {Array} endLocation
 * @param {Date} time
 * @param {Boolean} modePrivate
 * @param {Boolean} kidsOk
 * @param {Array} evaluations
 * @param {Array} tests

 */

module.exports = function (
  ownerId,
  questId,
  title,
  coverImg,
  description,
  homeLocation,
  endLocation,
  time,
  modePrivate,
  kidsOk,
  evaluations,
  tests
) {
    validateId(ownerId)
    if (typeof questId !== 'undefined') { validateId(questId) }
    if (typeof title !== 'undefined') { validateTitle(title) }
    if (typeof coverImg !== 'undefined') { validateCoverImg(coverImg) }
    if (typeof description !== 'undefined') { validateDescription(description) }
    if (typeof homeLocation !== 'undefined') { validateHomeLocation(homeLocation) }
    if (typeof endLocation !== 'undefined') { validateEndLocation(endLocation) }
    if (typeof time !== 'undefined') { validateTime(time) }
    if (typeof modePrivate !== 'undefined') { validateModePrivate(modePrivate) }
    if (typeof kidsOk !== 'undefined') { validateKidsOk(kidsOk) }
    if (typeof evaluations !== 'undefined') { validateEvaluations(evaluations) }
    if (typeof tests !== 'undefined') { validateTest(tests) }

  return (async () => {
  
      const user = await User.findById(ownerId)
      if (!user) throw new NotFoundError(`user with id ${ownerId} not found`)

      if (questId) 
      {
        const quest = await Quest.findById(questId)

        if (!quest) throw new NotFoundError(`quest with id ${questId} not found`)
        
        if (typeof title !== 'undefined') { quest.title = title }
        if (typeof coverImg !== 'undefined') { quest.coverImg = coverImg }
        if (typeof description !== 'undefined') { quest.description = description }
        if (typeof homeLocation !== 'undefined') { quest.homeLocation = homeLocation }
        if (typeof endLocation !== 'undefined') { quest.endLocation = endLocation }
        if (typeof time !== 'undefined') { quest.time = time }
        if (typeof modePrivate !== 'undefined') { quest.modePrivate = modePrivate }
        if (typeof kidsOk !== 'undefined') { quest.kidsOk = kidsOk }
        if (typeof evaluations !== 'undefined') { quest.evaluations = evaluations }
        if (typeof tests !== 'undefined') { quest.tests = tests }

        await quest.save()
        console.log('questId save quest:', questId )
        return quest._id;
      } 
      else 
      {
        const quest = await Quest.create({ title, coverImg, description, homeLocation, endLocation, time, modePrivate, kidsOk, evaluations, tests, owner: ObjectId(ownerId) })
        return quest._id;
      }
      
   })()
  }
