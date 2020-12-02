import { call } from '../../utils'
import { validateName, validateEmail, validatePassword, validateCallback, validateCity, validateArtistName, validateDescription, validateLastName } from './helpers/validations'

export default function (email, name, lastName, artistName, password, city, description, callback) {

    validateName(Name)
    validateLastName(lastName)

    call('POST', 'http://localhost:4000/api/users', { 'Content-type': 'application/json' }, 
    JSON.stringify({ email, name, lastName, artistName, password, city, description }),
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