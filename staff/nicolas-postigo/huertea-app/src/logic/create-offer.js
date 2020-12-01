import { call } from '../utils'
import { validateCallback, validateOffer } from './helpers/validations'

export default function (offername, titleoffer, image, callback) {
    validateOffer(offername)
    validateCallback(callback)

debugger
    call('POST', 'http://localhost:4000/api/offer', { 'Content-type': 'application/json' },
    JSON.stringify({offername, titleoffer, image}),
    (status, response) => {
        if (status === 0)
            return callback(new Error('server error'))
        else if (status !== 201) {
            const { error } = JSON.parse(response)

            return callback(new Error(error))
        }

        callback(null)
    })

}