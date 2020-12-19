import { call } from 'geogin-utils'

const {
  validateToken,
  validateCallback,
  validateFullname,
  validateEmail,
  validatePassword,
  validateImage,
  validateFavorites,
  validateScore

} = require('./helpers/validations')

/**
 * Update user
 *
 * @param {string} token
 * @param {string} fullname
 * @param {Array}  email
 * @param {Array}  password
 * @param {string} image
 * @param {Array}  score
 * @param {string} favorites
 */

export default (function saveGame (token, fullname, email, password, image, score, favorites, callback) {
  validateToken(token)
  validateCallback(callback)

  if (typeof fullname !== 'undefined') { validateFullname(fullname) }
  if (typeof email !== 'undefined') { validateEmail(email) }
  if (typeof password !== 'undefined') { validatePassword(password) }
  if (typeof image !== 'undefined') { validateImage(image) }
  if (typeof favorites !== 'undefined') { validateFavorites(favorites) }
  if (typeof score !== 'undefined') { validateScore(score) }

  const data = { token, fullname, email, password, image, score, favorites }

  Object.keys(data).forEach((key) => (data[key] == null) && delete data[key])
  delete data.token

  call('PATCH', 'http://localhost:4000/api/users', {
    'Content-type': 'application/json',
    Authorization: `Bearer ${token}`
  },
  JSON.stringify(data),
  (status, response) => {
    console.log('response', response)
    if (status === 0) {
      return callback(new Error('server error'))
    } else if (status !== 200) {
      const { error } = JSON.parse(response)
      return callback(new Error(error))
    }
    const res = JSON.parse(response)
    callback(null, res)
  })
})
