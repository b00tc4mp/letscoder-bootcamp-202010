import { call } from '../utils'
import { validateId, validateName, validateDescription, validatePrice, validateToken, validateCallback } from './helpers/validations'

export default function saveGame(gameId, name, description, budget, token, callback) {
    if (typeof gameId !== 'undefined') validateId(gameId)
    validateName(name)
    validateDescription(description)
    validatePrice(budget)
    validateToken(token)
    validateCallback(callback)
debugger
    call('POST', 'http://localhost:4000/api/games', {    
        'Content-type': ' application/json',
        Authorization: `Bearer ${token}`,
    },
        JSON.stringify({ gameId, name, description, budget }),
        (status, response) => {
            debugger
            if (status === 0)
                return callback(new Error('server error'))
            else if (status !== 200) {
                const { error } = JSON.parse(response)

                return callback(new Error(error))
            }
            callback(null)

        })
} 