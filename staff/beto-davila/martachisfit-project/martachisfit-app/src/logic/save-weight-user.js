import call from '../utils/call'
import { validateNumber, validateToken, validateCallback } from './helpers/validations'
import context from './context'

export default (function (token, weight, callback) {
    validateToken(token)
    validateNumber(weight)
    validateCallback(callback)

    const {API_URL} = this

    call('PATCH', `${API_URL}/users`, { Authorization: `Bearer ${token}`, 'Content-type': 'application/json' },
        JSON.stringify({ weight }),
        (status, response) => {
            if (status === 0)
                return callback (new Error('server error'))
            else if (status !== 201) {
                const { error } = JSON.parse(response)

                return callback(new Error(error))
            }
            callback(null)
        })
}).bind(context)