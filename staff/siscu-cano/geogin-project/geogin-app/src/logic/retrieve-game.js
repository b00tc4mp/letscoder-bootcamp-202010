import { call } from 'geogin-utils'
import { validateId, validateCallback } from './helpers/validations'
import { API_URL } from '../config'

export default function (gameId, callback) {
  validateId(gameId)
  validateCallback(callback)

  call('GET', `${API_URL}/game/${gameId}`, {},
    '',
    (status, response) => {
      if (status === 0) {
        return callback(new Error('server error'))
      } else if (status !== 200) {
        const { error } = JSON.parse(response)
        return callback(new Error(error))
      }

      const game = JSON.parse(response)
      callback(null, game)
    })
}
