import { call } from 'geogin-utils'
import { API_URL } from '../config'

const {
  validateQrCode,
  validateTeams,
  validatePlayers,
  validateId,
  validateProgress,
  validateToken,
  validateCallback

} = require('./helpers/validations')

/**
 * Create game
 *
 * @param {string} gameId
 * @param {string} qrCode
 * @param {Array}  teams
 * @param {Array}  players
 * @param {string} questId
 * @param {Array}  progress
 * @param {string} organizerId
 */

export default (function saveGame (token, gameId, questId, qrCode, teams, players, progress, callback) {
  console.log({ token, gameId, questId, qrCode, teams, players, progress, callback })

  validateToken(token)
  if (typeof gameId !== 'undefined') { validateId(gameId) }
  if (typeof questId !== 'undefined') { validateId(questId) }
  if (typeof qrCode !== 'undefined') { validateQrCode(qrCode) }
  if (typeof teams !== 'undefined') { validateTeams(teams) }
  if (typeof players !== 'undefined') { validatePlayers(players) }
  if (typeof progress !== 'undefined') { validateProgress(progress) }
  validateCallback(callback)

  call('POST', `${API_URL}/game`, {
    'Content-type': 'application/json',
    Authorization: `Bearer ${token}`
  },
  JSON.stringify({
    gameId, questId, qrCode, teams, players, progress
  }),
  (status, response) => {
    if (status === 0) {
      return callback(new Error('server error'))
    } else if (status !== 200) {
      const { error } = JSON.parse(response)
      return callback(new Error(error))
    }
    console.log(JSON.parse(response))
    const { gameId } = JSON.parse(response)
    callback(null, gameId)
  })
})
