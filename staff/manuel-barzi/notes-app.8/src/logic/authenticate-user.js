import { call } from 'notes-utils'
import { validateEmail, validatePassword } from './helpers/validations'
import context from './context'
import { AuthError } from 'notes-errors'

export default (function (email, password) {
    validateEmail(email)
    validatePassword(password)

    const { API_URL } = this

    return call('POST', `${API_URL}/users/auth`, { 'Content-type': 'application/json' }, JSON.stringify({ email, password }))
        .then(response => {
            const { status, body } = response

            if (status !== 200) {
                const { error } = JSON.parse(body)

                switch (status) {
                    case 401:
                        throw new AuthError(error)
                    default:
                        throw new Error(error)
                }
            }

            const { token } = JSON.parse(body)

            return token
        })
}).bind(context)