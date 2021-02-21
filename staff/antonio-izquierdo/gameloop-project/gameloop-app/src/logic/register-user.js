import { call } from '../utils'
import { validateFullname, validateEmail, validatePassword, validateCallback } from './helpers/validations'

/**
 * Registers a new user 
 * 
 * @param {string} fullname user's fullname
 * @param {string} email user's e-mail
 * @param {string} password user's password
 * 
 * @returns {null} onsuccessful registration
 * 
 * @throws {Error} on server error or user registered already
 * @throws {Error} if status is not 201
 */


export default function (fullname, email, password, callback) {
    validateFullname(fullname)
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