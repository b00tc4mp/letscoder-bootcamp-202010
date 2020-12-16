import { call } from '../utils'
import { validateToken, validateId, validateName, validateBreed,  validateColor, validateDescription, validateCallback } from './helpers/validations'
import context from './context'


export default (function savePet( token, petId, name, breed, species, color, description, callback) {
    validateToken(token)
    if (typeof petId !== 'undefined') validateId(petId)
    validateName(name)
    validateBreed(breed)
    validateColor(color)
    validateDescription(description)
    validateCallback(callback)

    const { API_URL } = this

    call('POST', `${API_URL}/pets`, { 
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
    },
        JSON.stringify({ petId, name, breed, species, color, description }),
        (status, response) => {
            if (status === 0)
                return callback(new Error('server error'))
            else if (status !== 200) {
                const { error } = JSON.parse(response)

                return callback(new Error(error))
            }


            callback(null, response)
        })
}).bind(context)