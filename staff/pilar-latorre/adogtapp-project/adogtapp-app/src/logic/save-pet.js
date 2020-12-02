import { call } from '../utils'
import { validateToken, validateId, validateName, validateBreed, validateColor, validateDescription, validateCallback } from './helpers/validations'

export default function savePet( petId, name, breed, color, description, token, callback) {
    validateToken(token)
    if (typeof petId !== 'undefined') validateId(petId)
    validateName(name)
    validateBreed(breed)
    validateColor(color)
    validateDescription(description)
    validateCallback(callback)
debugger
    call('POST', 'http://localhost:4000/api/pets', { 
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
    },
        JSON.stringify({ petId, name, breed, color, description }),
        (status, response) => {
            if (status === 0)
                return callback(new Error('server error'))
            else if (status !== 200) {
                const { error } = JSON.parse(response)

                return callback(new Error(error))
            }

            callback(null)
        })
}