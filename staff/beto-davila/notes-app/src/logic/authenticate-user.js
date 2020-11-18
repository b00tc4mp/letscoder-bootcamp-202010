import { call } from '../utils'
import { validateEmail, validatePassword, validateCallback } from './helpers/validations'

export default function (email, password, callback) {
    validateEmail(email)
    validatePassword(password)
    validateCallback(callback)

    call('POST', 'http://localhost:4000/api/users/auth', { 'Content-type': 'application/json', Authorization: 'Bearer' },
        JSON.stringify({ email, password }),
        (status, response) => {
            if (status !== 200) {
                const { error } = JSON.parse(response)

                return callback(new Error(error))
            }
            const id = JSON.parse(response)

            callback(null, id)
        })
}
