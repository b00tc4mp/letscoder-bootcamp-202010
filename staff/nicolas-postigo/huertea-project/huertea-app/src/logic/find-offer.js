import { call } from '../utils'
import { validateCallback } from './helpers/validations'

export default function ( titleoffer, offername, price, callback) {


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
}