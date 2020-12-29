import { call } from 'geogin-utils'
import { validateCallback } from './helpers/validations'
import { API_URL } from '../config'


export default function (doc, callback) {
  // validateDoc(doc)
  validateCallback(callback)

  call('POST', `${API_URL}/pdf-upload`,
    { 'Content-type': 'application/json' },
    JSON.stringify({ doc }),
    (status, response) => {
      if (status === 0) {
        return callback(new Error('server error'))
      } else if (status !== 201) {
        const { error } = JSON.parse(response)
        return callback(new Error(error))
      }
      const { uploadResponse } = JSON.parse(response)
      callback(null, uploadResponse)
    })
}
