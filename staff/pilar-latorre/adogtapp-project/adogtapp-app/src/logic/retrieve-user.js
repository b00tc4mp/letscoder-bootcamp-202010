import { call } from '../utils'
import { validateToken, validateCallback } from './helpers/validations'
import context from './context'

/**
 * Retrieves a user by its id
 * 
 * @param {string} userId 
 * 
 * @throws {Error} on server error
 * @throws {Error} if status is not 200
 * 
 * @returns {object} with user info 
 */

export default (function (token, callback) {
    validateToken(token)
    validateCallback(callback)

    const { API_URL } = this

    call('GET', `${API_URL}/users`, { Authorization: `Bearer ${token}` },
        '',
        (status, response) => {
            if (status === 0)
                return callback(new Error('server error'))
            else if (status !== 200) {
                const { error } = JSON.parse(response)

                return callback(new Error(error))
            }

            const user = JSON.parse(response)

            callback(null, user)
        })
}).bind(context)