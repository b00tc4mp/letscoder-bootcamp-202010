import { call } from '../utils'
import context from './context'
//import { validateCallback } from './helpers/validations
export default (function (query, gameconsole, budget, priceMin, priceMax, callback) {

   /*  validateToken(token)
    validateCallback(callback)
 */

    const { API_URL } = this

    const queryParams = {}

    if (query) queryParams.query = query
    if (gameconsole) queryParams.gameconsole = gameconsole
    if (budget) queryParams.budget = budget
    if (priceMin) queryParams.priceMin = priceMin
    if (priceMax) queryParams.priceMax = priceMax

    const queryString = Object.keys(queryParams).map(key =>`${key}=${queryParams[key]}`).join('&')

//ESTO ESTABA ASÍ: call('GET', `${API_URL}/games/?${queryString}`

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