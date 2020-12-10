import  call  from '../utils/call'
// import { validateFullname, validateEmail, validatePassword, validateCallback } from './helpers/validations'
import context from './context'
const registerUser = (fullname, email, password, callback) => {
    // validateFullname(fullname)
    // validateEmail(email)
    // validatePassword(password)
    // validateCallback(callback)
    
    const { API_URL } = context

    call('POST', `${API_URL}/users`, { 'Content-type': 'application/json' },
        JSON.stringify({ fullname, email, password }),
        (status, response) => {
            if (status === 0) {
                callback(new Error('server down'))
            } else if (status !== 201) {
                const { error } = JSON.parse(response)

                return callback(new Error(error))
            }


            callback(null)
        })
} 

export default registerUser