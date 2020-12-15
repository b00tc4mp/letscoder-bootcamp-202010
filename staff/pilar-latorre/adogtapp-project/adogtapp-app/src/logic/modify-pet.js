import { call } from '../utils'
import { validateToken, validateId, validateName, validateBreed,  validateColor, validateDescription, validateCallback } from './helpers/validations'
import context from './context'


export default (function savePet( petId, name, breed, species, color, description, token, callback) {
    validateToken(token)
    validateId(petId)
    if (typeof name !== 'undefined') validateId(name)
    if (typeof breed !== 'undefined') validateId(breed)
    if (typeof species !== 'undefined') validateId(species)
    if (typeof color !== 'undefined') validateId(color)
    if (typeof description !== 'undefined') validateId(description)

    const { API_URL } = this

    call('PATCH', `${API_URL}/pets`, { 
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