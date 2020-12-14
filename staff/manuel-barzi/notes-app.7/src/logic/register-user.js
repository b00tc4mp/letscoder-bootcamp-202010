import { call } from 'notes-utils'
import { validateFullname, validateEmail, validatePassword } from './helpers/validations'
import context from './context'

export default (function (fullname, email, password) {
    validateFullname(fullname)
    validateEmail(email)
    validatePassword(password)

    const { API_URL } = this

    return call('POST', `${API_URL}/users`, { 'Content-type': 'application/json' }, JSON.stringify({ fullname, email, password }))
        .then(response => {
            const { status, body } = response

            if (status !== 201) {
                const { error } = JSON.parse(body)

                throw new Error(error)
            }
        })
}).bind(context)