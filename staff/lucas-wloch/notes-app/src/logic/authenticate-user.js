import { call } from '../utils'
import { validateEmail, validatePassword, validateCallback } from './helpers/validations'

export default function (email, password, callback) {
    validateEmail(email)
    validatePassword(password)
    validateCallback(callback)

    call('POST', 'http://localhost:4000/api/users/auth', { 'Content-type': 'application/json' },
        JSON.stringify({ email, password }),
        (status, response) => {
            if (status === 0) {
                callback(new Error('server down'))
            }else if (status !== 200) {
                debugger
                const { error } = JSON.parse(response)
                
                return callback(new Error(error))
            }
            
            const { token } = JSON.parse(response)

            callback(null, token)
        })
}