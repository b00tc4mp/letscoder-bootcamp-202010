import { call } from 'notes-utils'
import { validateFullname, validateEmail, validatePassword, validateCallback } from './helpers/validations'
import context from './context'

export default (function (fullname, email, password, callback) {
    validateFullname(fullname)
    validateEmail(email)
    validatePassword(password)
    validateCallback(callback)

    const { API_URL } = this

    call('POST', `${API_URL}/users`, { 'Content-type': 'application/json' },
        JSON.stringify({ fullname, email, password }),
        (error, response) => {
            if (error) return callback(error)

            const { status, body } = response

            if (status !== 201) {
                const { error } = JSON.parse(body)

                return callback(new Error(error))
            }

            callback(null)
        })
}).bind(context)