import { call } from '../utils'
import { validateToken, validateCallback } from './helpers/validations'
import context from './context'

export default (function (token, callback) {
    validateToken(token)
    validateCallback(callback)

    const { API_URL } = this

    call('GET',  `${API_URL}/myoffers`, { Authorization: `Bearer ${token}` },
        '',
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