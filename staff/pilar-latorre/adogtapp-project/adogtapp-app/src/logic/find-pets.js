import { call } from '../utils'
import { validateCallback } from './helpers/validations'
import context from './context'

export default (function (token, queryShelter, city, queryPet, species, breed, callback) {
    
    validateCallback(callback)

    //poner  validations

    const { API_URL } =  this

    call('POST',  `${API_URL}/pets/find`, {'Content-type': 'application/json' },
    JSON.stringify({ token, queryShelter, city, queryPet, species, breed }),
        (status, response) => {
            if (status === 0)
                return callback(new Error('server error'))
            else if (status !== 200) {
                const { error } = JSON.parse(response)

                return callback(new Error(error))
            }

            const pets = JSON.parse(response)

            callback(null, pets)
        })
}).bind(context)