import call from '../utils/call'
import context from './context'
import { validateCallback, validateToken } from './helpers/validations'

export default (function (token, callback) {
    validateToken(token)
    validateCallback(callback)

    const { API_URL } = this

    call('DELETE', `${API_URL}/users/delete`, { Authorization: `Bearer ${token}` },
        null,
        (status, response) => {
            if (status === 0)
                return callback(new Error('server error'))
            else if (status !== 200) {
                const { error } = JSON.parse(response)

                return callback(new Error(error))
            }
            callback(null)
        })
}).bind(context)
