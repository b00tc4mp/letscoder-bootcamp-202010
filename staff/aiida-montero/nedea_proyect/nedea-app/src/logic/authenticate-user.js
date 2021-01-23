/**
 *  The callback expression that manages the result of the authentication
 *
 * @callback callback
 *
 * @param {Error} error In case a fail is detected on response from API
 * @param {string} token The auth token when credentials are correct (validation in API)
 */

/**
 * Authenticates a user by means of email and password.
 *
 * @example
 *
 * authenticateUser(email, password, function(error, token) {
 *      if (error) return console.error(error)
 *
 *      console.log(token)
 * })
 *
 * @param {string} email The user e-mail
 * @param {string} password The user password
 * @param {function} callback The callback expression that manages the result of the authentication
 *
 * @throws {TypeError} On type validation error
 * @throws {Error} On content validation error
 */

import { call } from '../utils'
import { validateEmail, validatePassword, validateCallback } from './helpers/validations'

export default function (email, password, callback) {
    validateEmail(email)
    validatePassword(password)
    validateCallback(callback)

    call('POST', 'http://localhost:4000/api/users/auth', { 'Content-type': 'application/json' },
        JSON.stringify({ email, password }),
        (status, response) => {
            if (status === 0)
                return callback(new Error('server error'))
            else if (status !== 200) {
                const { error } = JSON.parse(response)

                return callback(new Error(error))
            }

            const { token } = JSON.parse(response)

            callback(null, token)
        })
}