import { call } from '../utils'
import context from './context'
import { validateQuery, validateGameConsole, validatePrice  } from './helpers/validations'

/**
 * Retrieves games that match a query criteria
 * 
 * @param {string} query query to find information about the game, with this criteria you can search by name and description of the game
 * @param {String} gameconsole query to find information by gameconsole
 * @param {string} budget query to find information by exact price of each game
 * @param {String} priceMin query to find information by priceMin of each game
 * @param {String} priceMax query to find information by priceMax of each game
 * 
 * @throws {Error} on server error
 * @throws {Error} if status is not 200
 * 
 * @returns {Array} Games representing the games matching the queries criteria. Otherwise, empty array.
 * 
 */

export default (function (query, gameconsole, budget, priceMin, priceMax, callback) {
    if (typeof query !== 'undefined') validateQuery(query)
    if (typeof gameconsole !== 'undefined')validateGameConsole(gameconsole)
    if (typeof budget !== 'undefined')validatePrice(budget)
    if (typeof priceMin !== 'undefined')validatePrice(priceMin)
    if (typeof priceMax !== 'undefined')validatePrice(priceMax)
    
    const { API_URL } = this

    const queryParams = {}

    if (query) queryParams.query = query
    if (gameconsole) queryParams.gameconsole = gameconsole
    if (budget) queryParams.budget = budget
    if (priceMin) queryParams.priceMin = priceMin
    if (priceMax) queryParams.priceMax = priceMax

    const queryString = Object.keys(queryParams).map(key =>`${key}=${queryParams[key]}`).join('&')

    call('GET', `${API_URL}/games/?${queryString}`,
        { },
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