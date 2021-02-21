import { call } from '../utils'
import { validateCallback, validateOffer, validateTitleoffer } from './helpers/validations'
import context from './context'
/**
 * Retrieves offers that match a query criteria
 * 
 * @param {string} offername offers description
 * 
 * @returns {Array} 
 * 
 */
export default (function ( titleoffer, offername, price, callback) {
    validateOffer(offername)
    validateCallback(callback)

    
    const { API_URL } = this

    call('POST', `${API_URL}/offers/find`, {'Content-type': 'application/json' },
        JSON.stringify({ titleoffer, offername, price}),
        (status, response) => {
            if (status === 0)
                return callback(new Error('server error'))
            else if (status !== 200) {
                const { error } = JSON.parse(response)
                
                return callback(new Error(error))
            }

            const offers = JSON.parse(response)

            callback(null, offers)
        })
}).bind(context) 