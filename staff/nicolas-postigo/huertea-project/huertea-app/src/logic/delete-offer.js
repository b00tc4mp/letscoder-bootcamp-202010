import { call } from '../utils'
import { validateCallback, validateOffer, validateId, validateToken, validateTitleoffer } from './helpers/validations'
import context from './context'

export default (function (token, offerId, callback) {
    validateToken(token)

    if (typeof offerId !== 'undefined') validateId(offerId)

    validateCallback(callback)

    const { API_URL } = this

    call('DELETE', `${API_URL}/offer`, { 'Content-type': 'application/json', 
    Authorization: `Bearer ${token}`, 'Content-type': 'application/json'
    },
    JSON.stringify({ offerId }),
    (status, response) => {
        if (status === 0)
            return callback(new Error('server error'))
        else if (status !== 204) {
            const { error } = JSON.parse(response)

            return callback(new Error(error))
        }

        callback(null)
    })

}).bind(context) 