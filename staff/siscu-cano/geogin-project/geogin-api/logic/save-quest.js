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
  private,
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
    if (typeof private !== 'undefined') { validateVisibility(private) }
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
        quest.private = private
        quest.kidsOk = kidsOk
        quest.evaluations = evaluations
        quest.tests = tests

        quest.save()

        return quest._id;
      } 
      else 
      {
        const quest = await Quest.create({ title, coverImg, description, homeLocation, endLocation, time, private, kidsOk, evaluations, tests, owner: ObjectId(ownerId) })
        return quest._id;
      }
      
   })()
  }
//   return User
//   .findById(ownerId)
//   .then(user => { 
//     if (!user) throw new NotFoundError(`user with id ${ownerId} not found`)
    
//     console.log(user);
//   })
// }


//   .then(user => {
//       if (!user) throw new NotFoundError(`user with id ${ownerId} not found`)

//       if (noteId) {
//           return Note
//               .findById(noteId)
//               .then(note => {
//                   if (!note) throw new NotFoundError(`note with id ${noteId} not found`)

//                   note.text = text
//                   note.tags = tags
//                   note.visibility = visibility

//                   return note.save()
//               })
//               .then(note => note.id)
//       } else
//           return Note.create({ text, tags, visibility, owner: ObjectId(ownerId), date: new Date })
//               .then(note => note.id)
//   })







// return (async () => {
//   const user = await User.findOne({ email }).lean()

//   if (!user) throw new AuthError('wrong credentials')

//   const { password: hash } = user

//   const match = await bcrypt.compare(password, hash)

//   if (!match) throw new AuthError('wrong credentials')

//   const { _id } = user

//   return _id.toString()
// })()




//     .findById(ownerId)
//     .then(user => {
//       if (!user) throw new NotFoundError(`user with id ${ownerId} not found`)

//       return Quest.create({
//         title,
//         coverImg,
//         homeLocation,
//         endLocation,
//         time,
//         visibility,
//         kids_ok,
//         evaluations,
//         tests,
//         description,
//         ownerId: new mongoose.mongo.ObjectId(ownerId)
//       }).then(() => {})
//     })
// }
