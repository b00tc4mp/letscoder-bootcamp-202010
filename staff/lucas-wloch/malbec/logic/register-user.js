import call from '../utils/call'
import { validateFullname, validateEmail, validatePassword, validateCallback } from './helpers/validations'
import context from './context'

const registerUser = (fullname, email, password) => {
    validateFullname(fullname)
    validateEmail(email)
    validatePassword(password)

    const { API_URL } = context

    return call('POST', `${API_URL}/users`, { 'Content-type': 'application/json' }, JSON.stringify({ fullname, email, password }))
        .then(response => {

            const { status, body } = response

            if (status !== 201) {
                const { error } = JSON.parse(body)

                throw new Error(error)
            }
        })
}

export default registerUser