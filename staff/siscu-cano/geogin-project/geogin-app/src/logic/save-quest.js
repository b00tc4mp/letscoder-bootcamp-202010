import { call } from 'geogin-utils'

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
  validateId,
  validateToken,
  validateCallback

} = require('./helpers/validations')
/**
 * Saves quest game
 *
 * @param {string} token
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
 * @param {function} callback

 */
export default (function saveQuest (
  token,
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
  tests,
  callback) {
  validateToken(token)
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
  validateCallback(callback)

  call('POST', 'http://localhost:4000/api/quest', {
    'Content-type': 'application/json',
    Authorization: `Bearer ${token}`
  },
  JSON.stringify({
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
  }),
  (status, response) => {
    if (status === 0) {
      return callback(new Error('server error'))
    } else if (status !== 200) {
      const { error } = JSON.parse(response)
      return callback(new Error(error))
    }

    const { questId } = JSON.parse(response)
    callback(null, questId)
  })
})
