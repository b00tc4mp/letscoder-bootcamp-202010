import { call } from '../utils'
import { validateuserName, validateEmail, validatePassword, validateAddress, validateCity, validatePhone, validateCallback } from './helpers/validations'

/**
 * Registers a new user 
 * 
 * @param {string} userName user's fullname
 * @param {string} email user's e-mail
 * @param {string} password user's password
 * @param {string} address user's address
 * @param {string} city user's city
 * @param {string} phone user's phone
 * @param {string} description user's description
 * 
 * @returns {null} onsuccessful registration
 * 
 * @throws {Error} on server error or user registered already
 * @throws {Error} if status is not 201
 */

export default function (userName, email, password, address, city, phone, description, callback) {
    validateuserName(userName)
    validateEmail(email)
    validatePassword(password)
    validateAddress(address)
    validateCity(city)
    validatePhone(phone)
    validateCallback(callback)


    call('POST', 'http://localhost:4000/api/users', { 'Content-type': 'application/json' },
        JSON.stringify({ userName, email, password, address, city, phone, description }),
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