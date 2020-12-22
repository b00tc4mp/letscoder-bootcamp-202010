import { call } from '../utils'
import context from './context'
import { validateEmail, validatePassword, validateCallback, validateName, validateAddress } from './helpers/validations'

/**
 * Registers a new user 
 * 
 * @param {string} userName user's fullname
 * @param {string} email user's e-mail
 * @param {string} password user's password
 * @param {string} address user's address
 * @param {string} city user's city
 * @param {string} phone user's phone
 * @param {string} contact user's description
 * 
 * @returns {null} onsuccessful registration
 * 
 * @throws {Error} on server error or user registered already
 * @throws {Error} if status is not 201
 */

export default (function(name, email,password, contact, address, city, phone, callback)  {
validateName(name)
validateEmail(email)
validatePassword(password)
validateAddress(address)
validateCallback(callback)
 
    const { API_URL } = this
    
    call('POST',  `${API_URL}/users`, {'Content-type': 'application/json'},
    JSON.stringify({ name, email, password, contact, address, city, phone }),
    (status, response) => {
        if(status === 0)
            return callback(new Error('server error'))
        else if(status !== 201){
            const{ error } = JSON.parse(response)

            return callback(new Error(error))
        }

        callback(null)
    })
}).bind(context)