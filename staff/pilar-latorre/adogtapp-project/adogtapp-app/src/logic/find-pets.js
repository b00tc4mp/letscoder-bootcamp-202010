import { call } from '../utils'
import { validateCallback } from './helpers/validations'
import context from './context'

export default (function (token, queryShelter, city, queryPet, species, breed, callback) {
    
    validateCallback(callback)
debugger
    //poner  validations

    const { API_URL } =  this

    const queryParams = {}

    if (queryShelter) queryParams.queryShelter = queryShelter
    if (city) queryParams.city = city
    if (queryPet) queryParams.queryPet = queryPet
    if (species) queryParams.species = species
    if (breed) queryParams.breed = breed
    

    const queryString = Object.keys(queryParams).map(key => `${key}=${queryParams[key]}`).join('&') 



    call('GET', `${API_URL}/pets/?${queryString}`, 
    {Authorization: `Bearer ${token}` },
    '',
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

