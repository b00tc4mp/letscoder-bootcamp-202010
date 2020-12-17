import { call } from '../utils'
import { validateCallback, validateOffer, validateId, validateToken, validateTitleoffer } from './helpers/validations'
import context from './context'

export default (function (token, offerId, offername, titleoffer, price, offeraddress, phonecontact, emailcontact, callback) {
    validateToken(token)
    validateOffer(offername)
    if (typeof offerId !== 'undefined') validateId(offerId)
    validateTitleoffer(titleoffer)
    validateCallback(callback)

    const { API_URL } = this


    call('POST', `${API_URL}/offermodify`, { 'Content-type': 'application/json', 
    Authorization: `Bearer ${token}`,
    },
    JSON.stringify({ offerId, offername, titleoffer, price, offeraddress, phonecontact, emailcontact}),
    (status, response) => {
        if (status === 0)
            return callback(new Error('server error'))
        else if (status !== 201) {
            const { error } = JSON.parse(response)

            return callback(new Error(error))
        }
        const { offerId } = JSON.parse(response)

        callback(null, offerId)
    })

}).bind(context) 