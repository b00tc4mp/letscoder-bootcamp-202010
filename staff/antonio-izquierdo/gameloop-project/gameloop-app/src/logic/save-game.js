import { call } from '../utils'
import context from './context'
import { validateToken, validateId, validateText, validateGameConsole, validatePrice } from './helpers/validations'

/**
 *  Upload game
 * 
 * @param {string} token use to know userId
 * @param {string} gameId game's identification number(ObjectId)
 * @param {Stream} name game´s name
 * @param {Stream} description game´s description
 * @param {Stream} gameconsole game´s gameconsole
 * @param {Stream} budget game´s budget
 *
 * @throws {Error} on server error
 * @throws {Error} if status is not 200
 * 
 * @returns {array} returns array of objects with the game info
 */

export default (function saveGame(token, gameId, name, description, gameconsole, budget, callback) {
    validateToken(token)
    if (typeof gameId !== 'undefined') validateId(gameId)
    validateText(name)
    validateText(description)
    validateGameConsole(gameconsole)
    validatePrice(budget)

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