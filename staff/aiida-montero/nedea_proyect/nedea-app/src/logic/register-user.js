/**
 *  The callback expression that manages the result of the registration user
 *
 * @callback callback
 * @param null if successed 
 * @param {Error} error In case a fail is detected on response from API
 */

/**
 * Register a new user.
 *
 * @example
 *
 * registerUser(fullname, email, password, repassword, function(error) {
 *      if (error) return console.error(error)
 * })
 *
 * @param {string} fullname The name of the user who wants to register
 * @param {string} email The email of the user who wants to register
 * @param {string} password The string of the user who wants to register
 * @param {callback} callback The callback expression that manages the result of the registration
 *
 * @throws {TypeError} On type validation error
 * @throws {Error} On content validation error
 */

import { call } from '../utils'
import { validateFullname,  validateEmail, validatePassword, validateCallback } from './helpers/validations'

export default function (fullname, email, password, callback)  {
    validateFullname(fullname) 
    console.log(fullname)
    validateEmail(email)
    validatePassword(password)
    validateCallback(callback)

    call('POST', 'http://localhost:4000/api/users', { 'Content-type': 'application/json' },
        JSON.stringify({ fullname, email, password }),
        (status, response) => {
            if (status === 0)
                return callback(new Error('server error'))
            else if (status !== 201) {
                const { error } = JSON.parse(response)

                return callback(new Error(error))
            }

            callback(null) 
        })
}