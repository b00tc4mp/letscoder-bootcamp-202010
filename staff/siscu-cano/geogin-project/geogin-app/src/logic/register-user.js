import { call } from 'geogin-utils'
import { validateFullname, validateEmail, validatePassword, validateCallback } from './helpers/validations'
import { API_URL } from '../config'

export default function (fullname, email, password, callback) {
  validateFullname(fullname)
  validateEmail(email)
  validatePassword(password)
  validateCallback(callback)

  call('POST', `${API_URL}/users`, { 'Content-type': 'application/json' },
    JSON.stringify({ fullname, email, password }),
    (status, response) => {
      if (status === 0) { return callback(new Error('server error')) } else if (status !== 201) {
        const { error } = JSON.parse(response)

        return callback(new Error(error))
      }

      callback(null)
    })
}
