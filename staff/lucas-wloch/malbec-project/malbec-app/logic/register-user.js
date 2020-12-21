import call from '../utils/call'
import { validateFullname, validateEmail, validatePassword, validateKey} from './helpers/validations'
import context from './context'

const registerUser = (key, fullname, email, password) => {
    validateKey(key)
    validateFullname(fullname)
    validateEmail(email)
    validatePassword(password)

    const { API_URL } = context

    return call('POST', `${API_URL}/users`, { 'Content-type': 'application/json' }, JSON.stringify({ key, fullname, email, password }))
        .then(response => {

            const { status, body } = response

            if (status !== 201) {
                const { error } = JSON.parse(body)

                throw new Error(error)
            }
        })
}

export default registerUser