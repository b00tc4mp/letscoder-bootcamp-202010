import call from '../utils/call'
import { validateToken, validateCallback } from './helpers/validations'
import context from './context'

export default (function (token, callback) {
    validateToken(token)
    validateCallback(callback)

    const { API_URL } = this

    call('GET', `${API_URL}/users/foods`, { Authorization: `Bearer ${token}` },
        '',
        (status, response) => {
            if (status === 0)
                return callback(new Error('server error'))
            else if (status !== 200) {
                const { error } = JSON.parse(response)

                return callback(new Error(error))
            }

            const results = JSON.parse(response)

            callback(null, results)
        })
}).bind(context)