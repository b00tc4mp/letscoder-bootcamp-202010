import call from '../utils/call'
import { validateEmail, validatePassword } from './helpers/validations'
import context from './context'

const authenticateUser = (email, password) => {
    validateEmail(email)
    validatePassword(password)

    const { API_URL } = context


    return call('POST', `${API_URL}/users/auth`, { 'Content-type': 'application/json' }, JSON.stringify({ email, password }))
        .then(response => {

            const { status, body } = response

            if (status !== 200) {
                const { error } = JSON.parse(body)

                throw new Error(error)
            }

            const { token } = JSON.parse(body)

            return token
        })
}
export default authenticateUser