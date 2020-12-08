import { call } from '../utils'
import { validateCallback, validateOffer, validateId, validateToken, validateTitleoffer } from './helpers/validations'

export default function (token, offerId, offername, titleoffer, image, price, callback) {
    validateToken(token)
    validateOffer(offername)
    if (typeof offerId !== 'undefined') validateId(offerId)
    validateTitleoffer(titleoffer)
    validateCallback(callback)


    call('DELETE', 'http://localhost:4000/api/offer', { 'Content-type': 'application/json', 
    Authorization: `Bearer ${token}`, 'Content-type': 'application/json'
    },
    JSON.stringify({ offerId, offername, titleoffer, image, price}),
    (status, response) => {
        if (status === 0)
            return callback(new Error('server error'))
        else if (status !== 204) {
            const { error } = JSON.parse(response)

            return callback(new Error(error))
        }

        callback(null)
    })

}