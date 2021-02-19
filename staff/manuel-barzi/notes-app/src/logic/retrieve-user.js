import { call } from 'notes-utils'
import { validateToken, validateCallback } from './helpers/validations'
import context from './context'

export default (function (token, callback) {
    validateToken(token)
    validateCallback(callback)

    const { API_URL } = this

    call('GET', `${API_URL}/users`, { Authorization: `Bearer ${token}` },
        '',
        (error, response) => {
            if (error)
                return callback(error)

            const { status, body } = response

            if (status !== 200) {
                const { error } = JSON.parse(body)

                return callback(new Error(error))
            }

            const user = JSON.parse(body)

            callback(null, user)
        })
}).bind(context)