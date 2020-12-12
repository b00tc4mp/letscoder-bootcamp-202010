const semaphore = require('./helpers/semaphore')
const { mongoose: { Types: { ObjectId } }, models: { User, Quest } } = require('geogin-data')
const { NotFoundError } = require('geogin-errors')

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
    if (typeof homelocation !== 'undefined') { validateHomeLocation(homeLocation) }
    if (typeof endLocation !== 'undefined') { validateEndLocation(endLocation) }
    if (typeof time !== 'undefined') { validateTime(time) }
    if (typeof modePrivate !== 'undefined') { validateVisibility(modePrivate) }
    if (typeof kidsOk !== 'undefined') { validateKidsOk(kidsOk) }
    if (typeof evaluations !== 'undefined') { validateEvaluations(evaluations) }
    if (typeof tests !== 'undefined') { validateTest(tests) }
    if (typeof title !== 'undefined') { validateId(ownerId) }

  return (async () => {
  
      const user = await User.findById(ownerId)
      if (!user) throw new NotFoundError(`user with id ${ownerId} not found`)
      if (questId) 
      {
        const quest = await Quest.findById(questId)
        if (!quest) throw new NotFoundError(`quest with id ${questId} not found`)
        
        quest.title = title
        quest.coverImg = coverImg
        quest.description = description
        quest.homeLocation = homeLocation
        quest.endLocation = endLocation
        quest.time = time
        quest.modePrivate = modePrivate
        quest.kidsOk = kidsOk
        quest.evaluations = evaluations
        quest.tests = tests

        quest.save()

        return quest._id;
      } 
      else 
      {
        const quest = await Quest.create({ title, coverImg, description, homeLocation, endLocation, time, modePrivate, kidsOk, evaluations, tests, owner: ObjectId(ownerId) })
        return quest._id;
      }
      
   })()
  }
