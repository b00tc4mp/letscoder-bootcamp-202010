import { call } from '../../utils'
import { validateName, validateTags, validateCallback, validateCity, validateArtistName, validateDescription, validateLastName } from './helpers/validations'

export default function (fullname, artistName, city, description, tags, callback) {

    //validateFullname(fullname)
    validateArtistName(artistName)
    validateCity(city)
    validateDescription(description)
    validateTags(tags)
    validateCallback(callback)


    call('POST', 'http://192.168.0.21:4000/api/users', { 'Content-type': 'application/json' }, 
    JSON.stringify({ fullname, artistName, city, description, tags }),
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