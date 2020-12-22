import { call } from '../utils'
import { validateToken, validateCallback } from './helpers/validations'

/**
 * Update user credentials on the user's API
 * 
 * @param {string} token user's token for userId
 * @param {string} changes user's object with udpate
 * 
 * @returns {string} token
 * 
 * @throws {Error} on server error
 * @throws {Error} if status is not 200
 */

export default function (token, changes, callback) {
    validateToken(token)
    validateCallback(callback)

    call('POST', 'http://localhost:4000/api/users/edit',
        {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json'
        },
        JSON.stringify(changes),
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
}