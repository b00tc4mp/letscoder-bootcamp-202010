import { call } from '../utils'
import context from './context'
import { validateCallback, validateToken } from './helpers/validations'

/**
 * Retrieve user games by its id
 * 
 * @param {string} token
 * 
 * @throws {Error} on server error
 * @throws {Error} if status is not 200
 * 
 * @returns {object} with user's games info 
 * 
 */


export default (function (token, callback) {

    validateToken(token)
    validateCallback(callback)
 

    const { API_URL } = this

    call('GET', `${API_URL}/user/games`,
        {Authorization: `Bearer ${token}` },
        '',
        (status, response) => {
            if (status === 0)
                return callback(new Error('server error'))
            else if (status !== 200) {
                const { error } = JSON.parse(response)

                return callback(new Error(error))
            }

            const games = JSON.parse(response)
            
            callback(null, games)
        })
    
}).bind(context)