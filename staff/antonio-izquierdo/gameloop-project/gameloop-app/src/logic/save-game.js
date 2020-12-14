import { call } from '../utils'
import context from './context'
//import { validateId, validateName, validateDescription, validatePrice, validateCallback } from './helpers/validations'

export default (function saveGame(gameId, name, description, gameconsole, budget, token, callback) {
    //if (typeof gameId !== 'undefined') validateId(gameId)
    /*    validateName(query)
       validateDescription(description)
       validatePrice(budget)
       validateCallback(callback) */

    const { API_URL } = this

    call('POST', `${API_URL}/games`, {
        'Content-type': ' application/json',
        Authorization: `Bearer ${token}`,
    },
        JSON.stringify({ gameId, name, description, gameconsole, budget}),
        (status, response) => {
            if (status === 0)
                return callback(new Error('server error'))
            else if (status !== 200) {
                const { error } = JSON.parse(response)

                return callback(new Error(error))
            }
            const { gameId } = JSON.parse(response)
            callback(null, gameId)

        })
}).bind(context) 