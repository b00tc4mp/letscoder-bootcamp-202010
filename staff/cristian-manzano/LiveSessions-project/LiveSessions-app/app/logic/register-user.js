import { call } from '../../utils'
import { validateEmail, validatePassword, validateCallback, validateFullname } from './helpers/validations'

const {env: {API_URL}} = process

export default function (fullname, email, password, role, callback) {
debugger
    validateEmail(email)
    validateFullname(fullname)
    validatePassword(password)
    validateCallback(callback)


    call('POST', `${API_URL}/users`, { 'Content-type': 'application/json' }, 
    JSON.stringify({ fullname, email, password, role }),
    (status, response) => {
        console.log(role)
        if (status === 0)
            return callback(new Error('server error'))
        else if (status !== 201) {
            const { error } = JSON.parse(response)

            return callback(new Error(error))
        }

        callback(null)
    })
}