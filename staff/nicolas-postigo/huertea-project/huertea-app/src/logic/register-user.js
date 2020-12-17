import { call } from '../utils'
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
        (status, response) => {
            if (status === 0)
                return callback(new Error('server error'))
            else if (status !== 201) {
                const { error } = JSON.parse(response)

                return callback(new Error(error))
            }

            callback(null)
        })
}).bind(context) 
/* import { call } from '../utils'
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
        (status, response) => {
            if (status === 0)
                return callback(new Error('server error'))
            else if (status !== 201) {
                const { error } = JSON.parse(response)

                return callback(new Error(error))
            }

            callback(null)
        })
    }).bind(context)  */