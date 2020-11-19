import { call } from '../utils'
import { validateEmail, validatePassword, validateCallback} from './helpers/validations'

export default function (email, password, callback) {
    validateEmail(email)
    validatePassword(password)
    validateCallback(callback)

    call('POST', 'http://localhost:4000/api/users/auth', { 'Content-type': 'application/json'},
        JSON.stringify({ email, password }),
        (status, response) => {
                if (status ===200){
                var res = JSON.parse(response)
                callback(null, res.token)
                }else{
                var res = JSON.parse(response)
                callback(new Error(res.error))
                }
            })
}