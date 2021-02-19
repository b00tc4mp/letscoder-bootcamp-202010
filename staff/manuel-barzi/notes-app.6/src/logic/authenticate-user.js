import { call } from 'notes-utils'
import { validateEmail, validatePassword, validateCallback } from './helpers/validations'
import context from './context'

export default (function (email, password, callback) {
    validateEmail(email)
    validatePassword(password)
    validateCallback(callback)

    const { API_URL } = this

    call('POST', `${API_URL}/users/auth`, { 'Content-type': 'application/json' },
        JSON.stringify({ email, password }),
        (error, response) => {
            if (error) return callback(error)
            
            const { status, body } = response

            if (status !== 200) {
                const { error } = JSON.parse(body)

                return callback(new Error(error))
            }

            const { token } = JSON.parse(body)

            callback(null, token)
        })
}).bind(context)