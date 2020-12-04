import { call } from '../../utils'
import { validateName, validateEmail, validatePassword, validateCallback, validateCity, validateArtistName, validateDescription, validateLastName } from './helpers/validations'

export default function (fullname, email, password, callback) {
debugger
    validateEmail(email)
    validatefullname(fullname)
    validatePassword(password)
    validateCallback(callback)


    call('POST', 'http://192.168.1.129:4000/api/users', { 'Content-type': 'application/json' }, 
    JSON.stringify({ fullname, email,  password }),
    (status, response) => {
        if (status === 0)
            return callback(new Error('server error'))
        else if (status !== 201) {
            const { error } = JSON.parse(response)

            return callback(new Error(error))
        }

        callback(null)
    })
}